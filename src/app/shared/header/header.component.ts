import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

    constructor(public translate: TranslateService) {}
      get lang(): 'de'|'en' {
      return (this.translate.getCurrentLang() as 'de'|'en')
          ?? (this.translate.getFallbackLang() as 'de'|'en')
          ?? 'en';
    }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

}
