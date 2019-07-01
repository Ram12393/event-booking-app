import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../shared/models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  eventDetails: Event;
  constructor(
    private route: ActivatedRoute,
    private event: EventService
  ) { }

  ngOnInit() {
    this.getEventListByEventID();
  }
  getEventListByEventID() {
    this.event.eventByID(this.route.snapshot.params.id).subscribe(
      res => {
        this.eventDetails = res[0];
        console.log(this.eventDetails);
      }
    );
  }

}
