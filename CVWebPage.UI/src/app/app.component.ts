import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-web-page';
  tabs = [
    {name: 'Home', path: ''},
    {name: 'Projects', path: 'projects'}
  ]
  tabPanel: undefined
}
