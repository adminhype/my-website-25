import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, AboutMeComponent, MySkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
