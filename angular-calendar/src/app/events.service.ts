import { Injectable } from '@angular/core';
import { event } from './event';
import { EVENTS } from './eventlist';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): event[] {
    return EVENTS;
  }
}
