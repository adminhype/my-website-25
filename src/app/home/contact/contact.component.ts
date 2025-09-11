import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';
import { ContactForm, ContactLoad } from '../../interfaces/contact';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;
  showFeedback = false;

  private fb = inject(FormBuilder);
  private draftKey = 'contactForm';

  readonly form: FormGroup<ContactForm> = this.fb.nonNullable.group({
    name:    this.fb.nonNullable.control('', [Validators.required, Validators.minLength(2)]),
    email:   this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    message: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(10)]),
    consent: this.fb.nonNullable.control(false, { validators: Validators.requiredTrue }),
  });

    constructor() {
      this.restoreDraft();
      this.initAutosave();
  }
    get f() { return this.form.controls; }

    private restoreDraft(){
      const saved = sessionStorage.getItem(this.draftKey);
      if (!saved) return;
      try {
        const parsed = JSON.parse(saved) as Partial<ContactLoad>;
        this.form.patchValue(parsed, { emitEvent: false });
      } catch {
        sessionStorage.removeItem(this.draftKey);
      }
    }

  private initAutosave(){
    this.form.valueChanges
      .pipe(debounceTime(200), takeUntilDestroyed())
      .subscribe(() => this.saveDraft());
  }

  private saveDraft(){
    const { name, email, message, consent } = this.form.getRawValue();
    const draft: ContactLoad = { name, email, message, consent };
    sessionStorage.setItem(this.draftKey, JSON.stringify(draft));
  }

  private clearDraft(){
    sessionStorage.removeItem(this.draftKey);
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const data: ContactLoad = this.form.getRawValue();
    this.showFeedback = true;
    console.log('Form data:', data);
    setTimeout(() => {
      this.closeFeedback();
    }, 4000);
    this.form.reset({ name: '', email: '', message: '', consent: false }, { emitEvent: false });
    this.clearDraft();
    this.submitted = false;
  }
  closeFeedback() {
  this.showFeedback = false;
}
}
