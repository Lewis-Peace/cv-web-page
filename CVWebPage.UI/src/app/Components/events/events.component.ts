import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  @Input() dataSource?: Object[];
  @Input() title?: string;
  @Input() displayedColumns?: string[];
}
