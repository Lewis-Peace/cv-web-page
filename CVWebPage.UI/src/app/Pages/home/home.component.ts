import { Component } from '@angular/core';
import { esperienzeLavorative, presentation, titoliDiStudio } from 'src/app/Data/HomepageData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../pages.css']
})
export class HomeComponent {
  description: string = presentation;
  expLavoro = esperienzeLavorative

  titoliStudio = titoliDiStudio
}
