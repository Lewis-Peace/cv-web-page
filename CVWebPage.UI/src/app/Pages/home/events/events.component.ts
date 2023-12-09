import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['../../pages.css']
})
export class EventsComponent {
  @Input() dataSource?: Object[];
  @Input() title?: string;
  @Input() displayedColumns?: string[];
  @Input() displayedColumnsPhone?: string[];

  ngOnInit() {
    if (!this.displayedColumnsPhone) {
      this.displayedColumnsPhone = this.displayedColumns;
    }
  }
}
