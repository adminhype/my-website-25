import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';
import { ContactForm, ContactLoad } from '../../interfaces/contact';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;

  private fb = inject(FormBuilder);

  readonly form: FormGroup<ContactForm> = this.fb.nonNullable.group({
    name:    this.fb.nonNullable.control('', [Validators.required, Validators.minLength(2)]),
    email:   this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    message: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(10)]),
    consent: this.fb.nonNullable.control(false, { validators: Validators.requiredTrue }),
  });

  get f() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const data: ContactLoad = this.form.getRawValue();
    console.log('Form data:', data);
    this.form.reset({ name: '', email: '', message: '', consent: false });
    this.submitted = false;
  }

}
