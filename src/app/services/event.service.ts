import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpService
  ) { }

  events() {
    return this.http.get('events');
  }
}
