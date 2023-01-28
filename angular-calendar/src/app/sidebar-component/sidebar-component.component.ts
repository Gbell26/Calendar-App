import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css']
})
export class SidebarComponentComponent {
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
}

