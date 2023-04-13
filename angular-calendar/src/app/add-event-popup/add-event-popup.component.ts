import { Component, EventEmitter, Output } from '@angular/core';
import {Event} from '../models/event';
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

  newEvent:Event={
    EID: 0,
    Username: "gbell",
    Title: "",
    Day: 8,
    Month: "February",
    Year: 2023,
    Location: "",
    StartTime:"12:00",
    EndTime:"12:00",
    Description:"",
  }

  
  AddToList(){

    //parse date and add year month day to newEvent object
    var newDateElement = <HTMLInputElement>document. getElementById("matInput");
    var newDate = newDateElement.value;
    var newDateArray = newDate.split("/");

    //date is parsed convert month from number to associated month name
    this.newEvent.Month = this.months[+newDateArray[0] - 1];
    this.newEvent.Day = +newDateArray[1];
    this.newEvent.Year = +newDateArray[2];
    this.eventService.addEvents(this.newEvent).subscribe();
    this.dialog.closeAll();
  }
  
  Cancel(){
    this.dialog.closeAll();
  }
  OnDateChange(newDate:string){

  }

}
