import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../shared/models/event.model';

@Component({
  selector: 'app-card-display1',
  templateUrl: './card-display1.component.html',
  styleUrls: ['./card-display1.component.scss']
})
export class CardDisplay1Component implements OnInit {

  @Input() data: Array<Event>;
  constructor() { }

  ngOnInit() {
  }

}
