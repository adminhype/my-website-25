import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsciiService } from './services/ascii.service';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private asciiService: AsciiService, public translate: TranslateService) {
    this.asciiService.showAscii();
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    const saved = (localStorage.getItem('lang') as 'de'|'en')
      ?? (navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en');
    this.translate.use(saved);
    this.translate.onLangChange.subscribe(({ lang }) => localStorage.setItem('lang', lang));
}
}