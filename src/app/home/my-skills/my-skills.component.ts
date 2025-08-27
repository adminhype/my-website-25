import { Component } from '@angular/core';
import { Skills } from '../../interfaces/skills';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  imports: [TranslatePipe],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  basePath = './images/icons';

  skills: Skills[] = [
    { key: 'angular',  label: 'Angular',          icon: 'angular-icon.png' },
    { key: 'ts',       label: 'TypeScript',       icon: 'ts-icon.png' },
    { key: 'js',       label: 'JavaScript',       icon: 'js-icon.png' },
    { key: 'html',     label: 'HTML',             icon: 'html-icon.png' },
    { key: 'css',      label: 'CSS',              icon: 'css-icon.png' },
    { key: 'git',      label: 'Git',              icon: 'git-icon.png' },
    { key: 'firebase', label: 'Firebase',         icon: 'firebase-icon.png' },
    { key: 'scrum',    label: 'Scrum',            icon: 'scrum-icon.png' },
    { key: 'rest',     label: 'REST-API',         icon: 'rest-api-icon.png' },
    { key: 'material', label: 'Material design',  icon: 'material-icon.png' },
  ];
}
