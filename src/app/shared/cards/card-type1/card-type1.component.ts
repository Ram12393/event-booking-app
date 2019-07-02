import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Event } from '../../../shared/models/event.model';


@Component({
  selector: 'app-card-type1',
  templateUrl: './card-type1.component.html',
  styleUrls: ['./card-type1.component.scss']
})
export class CardType1Component implements OnInit, AfterViewInit {

  @Input() data: Event;
  @ViewChild('eventName', { static: false }) eventName: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const eventNameLength = this.eventName.nativeElement.textContent.length;
    this.eventName.nativeElement.textContent = eventNameLength < 20 ?
      this.eventName.nativeElement.textContent : this.eventName.nativeElement.textContent.substring(1, 20) + '...';
  }
}
