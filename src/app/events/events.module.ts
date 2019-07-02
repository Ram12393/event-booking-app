import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SharedModule } from '../shared/shared.module';
import { CardsDisplayModule } from '../shared/cards-display/cards-display.module';
import { EventsComponent } from './events.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    EventsListComponent,
    EventDetailsComponent,
    EventsComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    CardsDisplayModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class EventsModule { }
