import { Injectable } from '@angular/core';
import { event } from './event';
import { EVENTS } from './eventlist';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  addEvents(newEvent: event) {
    EVENTS.push(newEvent);
    window.alert('Your event has been added!');
    window.alert(`${EVENTS[7].title}`)
  }

  getEvents():Observable<event[]> {
    const events = of(EVENTS);
    return events;
  }
}
