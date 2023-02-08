import { Component, EventEmitter, Output } from '@angular/core';
import {event} from '../event';
import { EventsService } from '../events.service';


@Component({
  selector: 'app-add-event-popup',
  templateUrl: './add-event-popup.component.html',
  styleUrls: ['./add-event-popup.component.css']
})
export class AddEventPopupComponent {
  
  constructor(private eventService:EventsService){}

  newEvent:event={
    id: 0,
    title: "",
    day: 7,
    month: "February",
    year: 2023,
    location: "",
    starttime:"12:00",
    endtime:"12:00",
    description:"",
  }

  
  AddToList(){
    this.eventService.addEvents(this.newEvent);
  }
  Cancel(){
  }

}
