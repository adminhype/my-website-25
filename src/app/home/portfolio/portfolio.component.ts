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
      github: 'https://github.com/adminhype/joinKanban',
      live: 'https://adminhype.github.io/joinKanban/#/login/',
      i18nKey: 'portfolio.items.join'
    },
    {
      id: 2,
      image: './images/pollo-placeholder.png',
      github: 'https://github.com/adminhype/polloLoco',
      live: 'https://adminhype.github.io/polloLoco/',
      i18nKey: 'portfolio.items.pollo'
    },
    {
      id: 3,
      image: './images/pokedex-placeholder.png',
      github: 'https://github.com/adminhype/pokedex',
      live: 'https://github.com/adminhype/pokedex',
      i18nKey: 'portfolio.items.pokedex'
    },
    {
      id: 4,
      image: './images/kanmind.png',
      github: 'https://github.com/adminhype/KanMind',
      live: 'https://github.com/adminhype/KanMind',
      i18nKey: 'portfolio.items.kanmind'
    },
    {
      id: 5,
      image: './images/coderr_banner.png',
      github: 'https://github.com/adminhype/Coderr',
      live: 'https://github.com/adminhype/Coderr',
      i18nKey: 'portfolio.items.coderr'
    },
  ];
}
