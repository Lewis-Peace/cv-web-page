import { Component } from '@angular/core';
import { IProject } from 'src/app/Components/project/IProject';
import { projects } from 'src/app/Data/ProjectsData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../pages.css']
})
export class ProjectsComponent {
  projects: IProject[] = projects
}
