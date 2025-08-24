import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsciiService } from './services/ascii.service';
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

  constructor(private asciiService: AsciiService) {
    this.asciiService.showAscii();
  }
}
