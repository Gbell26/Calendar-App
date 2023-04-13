import { Component,OnInit, Input, SimpleChange, SimpleChanges} from '@angular/core';
import {Event} from '../models/event';
import { EventsService } from '../events.service';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.css']
})
export class DayComponentComponent {

  constructor(private eventService: EventsService) {}
  events$!:Observable<Event[]>

  @Input() month="";
  @Input() year=0;
  @Input() day=0;

  selectedEventID = 0;

  ngOnInit(): void{
    this.events$ = this.eventService.getEvents(this.month,this.day,this.year);
  }


  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    this.events$ = this.eventService.getEvents(this.month, this.day,this.year);
  }

  deleteEvent(id:number):void{
    //this.selectedEventID = id;
    console.log(id);
    this.events$ = this.eventService.deleteEvents(id)
    .pipe(tap(() => (this.events$ = this.eventService.getEvents(this.month, this.day,this.year))));
    
  }
  
  //get the events for this day
  
    //Ways to delete an event:
  /*
  1. delete event button similar to add event button. press button enter event id delete ----> easiest way but not a good solution.
  2. Most user friendly would be to select the event similar to selecting a day, each event has a delete button displayed?. ---> how do will I get event ID from this solution?
  3. My favorite idea --> selecting an event opens an edit event modal > here we can delete an event, change its title etc. ----> same issue as first option
  next step is a system for event ID then how to get this ID when selecting an event from the day display
  
  event id = number of events +1?
  event id = date + number of events on that day + 1
  
  
  selectedEventID: number = 0;
  selectedEvent(index:number){
    
  }
  //get events array
  getEvents():event[]{
      return this.eventService.getEvents();
  }*/
}
