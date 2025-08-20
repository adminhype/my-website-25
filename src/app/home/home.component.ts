import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
