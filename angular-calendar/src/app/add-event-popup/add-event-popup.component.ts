import { Component, EventEmitter, Output } from '@angular/core';
import {event} from '../event';
import { EVENTS } from '../eventlist';

@Component({
  selector: 'app-add-event-popup',
  templateUrl: './add-event-popup.component.html',
  styleUrls: ['./add-event-popup.component.css']
})
export class AddEventPopupComponent {
  
  newEvent:event={
    id: 0,
    title: "",
    day: 0,
    month: "",
    year: 0,
    location: "",
    starttime:"",
    endtime:"",
    description:"",
  }

    @Output() dayrefresh = new EventEmitter
    refresh(){
      var eventTitle=<HTMLInputElement>document.getElementById("ename");
      var startTime=<HTMLInputElement> document.getElementById("starttime");
      var endTime=<HTMLInputElement> document.getElementById("endtime");
      var eventLocation=<HTMLInputElement> document.getElementById("location");
      var eventDescription=<HTMLTextAreaElement> document.getElementById("description");
      this.newEvent={
        id: 0,
        title: eventTitle.value,
        day: 3,
        month:"January" ,
        year: 2023,
        location: eventLocation.value,
        starttime:startTime.value,
        endtime:endTime.value,
        description:eventDescription.value,
      }
      EVENTS[0]=this.newEvent;
      
      this.dayrefresh.emit();
    } 
  
  AddToList(){
    var eventTitle=<HTMLInputElement>document.getElementById("ename");
    var startTime=<HTMLInputElement> document.getElementById("starttime");
    var endTime=<HTMLInputElement> document.getElementById("endtime");
    var eventLocation=<HTMLInputElement> document.getElementById("location");
    var eventDescription=<HTMLTextAreaElement> document.getElementById("description");
    //var date=document.getElementById("");
    
    this.newEvent={
      id: 0,
      title: eventTitle.value,
      day: 3,
      month:"January" ,
      year: 2023,
      location: eventLocation.value,
      starttime:startTime.value,
      endtime:endTime.value,
      description:eventDescription.value,
    }
    EVENTS[0]=this.newEvent;
    this.refresh();
  }

}
