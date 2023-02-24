import { Component, EventEmitter, Output } from '@angular/core';
import {event} from '../event';
import { EventsService } from '../events.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-add-event-popup',
  templateUrl: './add-event-popup.component.html',
  styleUrls: ['./add-event-popup.component.css']
})
export class AddEventPopupComponent {
  
  constructor(private eventService:EventsService, private dialog:MatDialog){}

  months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  newEvent:event={
    id: 0,
    title: "",
    day: 8,
    month: "February",
    year: 2023,
    location: "",
    starttime:"12:00",
    endtime:"12:00",
    description:"",
  }

  
  AddToList(){

    //parse date and add year month day to newEvent object
    var newDateElement = <HTMLInputElement>document. getElementById("matInput");
    var newDate = newDateElement.value;
    var newDateArray = newDate.split("/");

    //date is parsed convert month from number to associated month name
    this.newEvent.month = this.months[+newDateArray[0] - 1];
    this.newEvent.day = +newDateArray[1];
    this.newEvent.year = +newDateArray[2];
    this.eventService.addEvents(this.newEvent);
    this.dialog.closeAll();
  }
  Cancel(){
    this.dialog.closeAll();
  }
  OnDateChange(newDate:string){

  }

}
