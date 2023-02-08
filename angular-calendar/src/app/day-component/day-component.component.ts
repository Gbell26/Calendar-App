import { Component,OnInit, Input, SimpleChange, SimpleChanges} from '@angular/core';
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

  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    this.daysEvents=[];
    this.getDaysEvents();
  }

  ngOnInit(){
    this.events=this.getEvents();
    this.getDaysEvents();
    this.eventService.refreshNeeded
      .subscribe(() => {
        this.events=this.getEvents();
        this.daysEvents=[];
        this.getDaysEvents();
      });
  }

  //get the events for this day
  getDaysEvents(){
    for(var i=0; i < this.events.length; i++){
      if(this.events[i].day == this.day && this.events[i].month == this.month){
        this.daysEvents.push(this.events[i]);
      }
    }
  }

  //get events array
  getEvents():event[]{
      return this.eventService.getEvents();
  }
}
