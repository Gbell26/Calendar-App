import { Component,OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddEventPopupComponent } from '../add-event-popup/add-event-popup.component';

@Component({
  selector: 'app-day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.css']
})
export class DayComponentComponent {

  constructor(private dialog:MatDialog){}
  @Input() month="";
  @Input() year=0;
  @Input() day=0;

  //open event modal
  newEvent(){
    this.dialog.open(AddEventPopupComponent);
  }
}
