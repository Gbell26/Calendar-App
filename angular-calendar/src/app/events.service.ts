import { Injectable } from '@angular/core';
import { event } from './event';
import { EVENTS } from './eventlist';
import { Observable, of, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  private refresh = new Subject<void>();

  events = of(EVENTS);

  get refreshNeeded(){
    return this.refresh;
  }

  addEvents(newEvent: event) {
    EVENTS.push(newEvent);
    this.refresh.next();
  }

  getEvents(){
    return EVENTS;
  }
}
