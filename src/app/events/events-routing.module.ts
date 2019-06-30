import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './events.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'event'
  },
  {
    path: 'event',
    component: EventsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: EventsListComponent
      },
      {
        path: 'details',
        component: EventDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
