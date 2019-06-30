import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SharedModule } from '../shared/shared.module';
import { CardsDisplayModule } from '../shared/cards-display/cards-display.module';

@NgModule({
  declarations: [
    EventsListComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    CardsDisplayModule
  ]
})
export class EventsModule { }
