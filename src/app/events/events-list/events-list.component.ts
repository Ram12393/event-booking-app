import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../shared/models/event.model';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: any;
  availableEventList: Event;

  constructor(
    private event: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.event.events().subscribe((res: Event) => {
      this.eventList = res;
      this.availableEventList = this.eventList;
    });
  }

  filterBySearchData(event): void {
    this.availableEventList = this.eventList.filter((item: Event) =>
      item.event_name.toLowerCase().includes(event.toLowerCase()));
  }

}
