import { Component,OnInit, Input } from '@angular/core';
import {event} from '../event';
import { EVENTS } from '../eventlist';
import { AddEventPopupComponent } from '../add-event-popup/add-event-popup.component';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.css']
})
export class DayComponentComponent {

  constructor(private eventService: EventsService) {}

  @Input() month="";
  @Input() year=0;
  @Input() day=0;

  events:event[] = [];


  getEvents():void{
    this.events = this.eventService.getEvents();
  }

  ngOnInit():void{
    this.getEvents();
  }
}
