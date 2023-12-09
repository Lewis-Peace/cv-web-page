import { Component, Input } from '@angular/core';
import { IProject } from '../../../Data/IProject'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['../../pages.css']
})
export class ProjectComponent {
  @Input() project: IProject | undefined
}
