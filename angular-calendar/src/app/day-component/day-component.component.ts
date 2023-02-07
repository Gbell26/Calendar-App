import { Component,OnInit, Input } from '@angular/core';
import {event} from '../event';
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
  daysEvents:event[] = [];

  ngOnInit(){
    this.getEvents();
    this.getDaysEvents();
  }

  //get the events for this day
  getDaysEvents(){
    for(var i=0; i < this.events.length - 1; i++){
      if(this.events[i].day == this.day && this.events[i].month == this.month){
        this.daysEvents.push(this.events[i]);
      }
    }
  }

  //get events array
  getEvents():void{
      this.eventService.getEvents()
        .subscribe(events => this.events = events);
      }
  }
