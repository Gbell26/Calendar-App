import { Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddEventPopupComponent } from '../add-event-popup/add-event-popup.component';


@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css']
})
export class SidebarComponentComponent {

  constructor(private dialog:MatDialog){}
  @Input() month=""
  @Input() year=0

  @Output() incrementMonth = new EventEmitter
  nextMonth(){
    this.incrementMonth.emit();
  } 

  @Output() decrementMonth = new EventEmitter
  lastMonth(){
    this.decrementMonth.emit();
  } 

  newEvent(){
    this.dialog.open(AddEventPopupComponent);
  }
}

