import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../../interfaces/projects';

@Component({
  selector: 'app-portfolio-project',
  imports: [TranslatePipe],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
  @Input() project!: Project;
  @Input() reversed: boolean = false;
  @Input() index!: number;
  @Input() total!: number;
}
