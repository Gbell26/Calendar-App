import { getLocaleDateFormat, getLocaleFirstDayOfWeek, getLocaleMonthNames } from '@angular/common';
import { Interpolation } from '@angular/compiler';
import { Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddEventPopupComponent } from '../add-event-popup/add-event-popup.component';


@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css']
})
export class CalendarComponentComponent {

  constructor(private dialog:MatDialog){}

  date:Date= new Date();

  //array of the names of each month so we can retrieve them based on numerical value returned from getMonth()
  months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //These arrays are used to loop *ngFor in HTML to give the correct number of days in the month
  //As well as starting on the first day
  dayNumbers: number[]=[];
  dayPadding:number[]=[];
  endPadding:number[]=[];


 //Get the starting month
  startMonthNum = this.date.getMonth();
  startMonth = this.months[this.startMonthNum];
  //Get the starting year
  startYear = this.date.getFullYear();

  //Get the starting day of the month
  dayOfMonth=this.date.getDate();

  //Change the day of the month when div is clicked
  selectedDay(index:number){
    this.dayOfMonth=index+1; 
  }

  //get the number of days in the month based on the starting month and year
  numberOfDaysInCurrentMonth = this.daysInMonth(this.startYear, this.startMonthNum);
  numberOfDaysInPreviousMonth = this.daysInMonth(this.startYear, this.startMonthNum-1);
 
  //Get the number of days you need to pad the beginning of the calendar in order to start on the
  //correct day of the week
  paddingDays=this.firstWeekDay(this.startYear, this.startMonthNum);
  endPaddingNum=42-(this.paddingDays+this.numberOfDaysInCurrentMonth);

  ngOnInit(){
    //Fill dayNumbers array with the number of days in the starting month
    //end of month padding
    for(var i=0;i<this.numberOfDaysInCurrentMonth;i++){
      this.dayNumbers[i]=i;
    }
    for(var i=0;i<this.paddingDays;i++){
      this.dayPadding[i]=i;
    }
    //not right
    for(var i=0;i<this.endPaddingNum;i++){
      this.endPadding[i]=i;
    }
  }
  
  
  //get first day of the week
  public firstWeekDay(year:number, month:number){
    var days:Date = new Date(year, month, 1);
    var firstDay = days.getDay();
    return firstDay;
  }
  //get the number of days in the month
  public daysInMonth(year:number, month:number){
    var days:Date = new Date(year, month +1, 0);
    var daysInMonth = days.getDate();
     return daysInMonth;
  }

  //generate the calendar for the next month
  nextMonth(){
    //if it is december, go to january of next year
    if(this.startMonthNum==11){
      this.startMonthNum = 0;
      this.startYear++;
      this.startMonth = this.months[this.startMonthNum];
      this.numberOfDaysInCurrentMonth = this.daysInMonth(this.startYear, this.startMonthNum);
      this.numberOfDaysInPreviousMonth = this.daysInMonth(this.startYear, this.startMonthNum-1);
      this.paddingDays=this.firstWeekDay(this.startYear, this.startMonthNum);
      this.endPaddingNum=42-(this.paddingDays+this.numberOfDaysInCurrentMonth);
      this.dayNumbers=[];
      this.dayPadding=[];
      this.endPadding=[];
      
      for(var i=0;i<this.numberOfDaysInCurrentMonth;i++){
        this.dayNumbers[i]=i;
      }
      for(var i=0;i<this.paddingDays;i++){
        this.dayPadding[i]=i;
      }
      for(var i=0;i<this.endPaddingNum;i++){
        this.endPadding[i]=i;
      }
    }
    else{
      //Increment the month & get the name of the month & the number of days in the month
    this.startMonthNum++;
    this.startMonth = this.months[this.startMonthNum];
    this.numberOfDaysInCurrentMonth = this.daysInMonth(this.startYear, this.startMonthNum);
    this.numberOfDaysInPreviousMonth = this.daysInMonth(this.startYear, this.startMonthNum-1);
    //determine the first day of the month
    this.paddingDays=this.firstWeekDay(this.startYear, this.startMonthNum);
    this.endPaddingNum=42-(this.paddingDays+this.numberOfDaysInCurrentMonth);
    
    this.dayNumbers=[];
    this.dayPadding=[];
    this.endPadding=[];
    for(var i=0;i<this.numberOfDaysInCurrentMonth;i++){
      this.dayNumbers[i]=i;
    }
    for(var i=0;i<this.paddingDays;i++){
      this.dayPadding[i]=i;
    }
    for(var i=0;i<this.endPaddingNum;i++){//not right
      this.endPadding[i]=i;
    }
  }
  }
  //generate the calendar for the previous month
  previousMonth(){
    //if it is january go to december of the previous year
    if(this.startMonthNum==0){
      this.startMonthNum = 11;
      this.startYear--;
      this.startMonth = this.months[this.startMonthNum];
      //Get the number of days in the month
      this.numberOfDaysInCurrentMonth = this.daysInMonth(this.startYear, this.startMonthNum);
      this.numberOfDaysInPreviousMonth = this.daysInMonth(this.startYear, this.startMonthNum-1);
      //Get the first week day of the month
      this.paddingDays=this.firstWeekDay(this.startYear, this.startMonthNum);
      this.endPaddingNum=42-(this.paddingDays+this.numberOfDaysInCurrentMonth);
      //empty dayNumbers array & padding array
      this.dayNumbers=[];
      this.dayPadding=[];
      this.endPadding=[];
      //fill the number of days in the month & how much padding needed
      for(var i=0;i<this.numberOfDaysInCurrentMonth;i++){
        this.dayNumbers[i]=i;
      }
      for(var i=0;i<this.paddingDays;i++){
        this.dayPadding[i]=i;
      }
      for(var i=0;i<this.endPaddingNum;i++){//not right
        this.endPadding[i]=i;
      }
    }
    else{
      //Decrement the month number
    this.startMonthNum--;
    //retrieve the name of the month
    this.startMonth = this.months[this.startMonthNum];
    //Get the number of days in the month
    this.numberOfDaysInCurrentMonth = this.daysInMonth(this.startYear, this.startMonthNum);
    this.numberOfDaysInPreviousMonth = this.daysInMonth(this.startYear, this.startMonthNum-1);
    //Get the first week day of the month
    this.paddingDays=this.firstWeekDay(this.startYear, this.startMonthNum);
    this.endPaddingNum=42-(this.paddingDays+this.numberOfDaysInCurrentMonth);
    //empty dayNumbers array & padding array
    this.dayNumbers=[];
    this.dayPadding=[];
    this.endPadding=[];
    //fill the number of days in the month & how much padding needed
    for(var i=0;i<this.numberOfDaysInCurrentMonth;i++){
      this.dayNumbers[i]=i;
    }
    for(var i=0;i<this.paddingDays;i++){
      this.dayPadding[i]=i;
    }
    for(var i=0;i<this.endPaddingNum;i++){//not right
      this.endPadding[i]=i;
    }

  }
  }
  //open create event modal
  newEvent(){
    this.dialog.open(AddEventPopupComponent);
  }
}
