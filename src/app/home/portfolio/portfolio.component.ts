import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../interfaces/projects';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe, PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      image: './images/join.png',
      github: 'https://github.com/adminhype/my-website-25',
      live: 'https://ik-0225-join-002.developerakademie.net/angular-projects/join/login',
      i18nKey: 'portfolio.items.join'
    },
    {
      id: 2,
      image: './images/pollo-placeholder.png',
      github: 'https://github.com/dein-repo/other',
      live: 'https://dein-live-link.com',
      i18nKey: 'portfolio.items.pollo'
    },
        {
      id: 3,
      image: './images/pokedex-placeholder.png',
      github: 'https://github.com/dein-repo/other',
      live: 'https://dein-live-link.com',
      i18nKey: 'portfolio.items.pokedex'
    },
  ];
}
