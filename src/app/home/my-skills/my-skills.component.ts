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
    { key: 'python',   label: 'Python',           icon: 'python-icon.png' },
    { key: 'django',   label: 'Django',           icon: 'django-icon1.png' },
    { key: 'drf',      label: 'Django REST',      icon: 'drf-icon1.png' },
    { key: 'sql',      label: 'SQLite',           icon: 'sql-icon.png' },
    { key: 'linux',    label: 'Linux',            icon: 'linux-icon.png' },
    { key: 'angular',  label: 'Angular',          icon: 'angular-icon.png' },
    { key: 'js',       label: 'JavaScript',       icon: 'js-icon.png' },
    { key: 'html',     label: 'HTML',             icon: 'html-icon.png' },    
    { key: 'git',      label: 'Git',              icon: 'git-icon.png' },
    { key: 'postman',  label: 'Postman',          icon: 'postman-icon.png' },
  ];
}
