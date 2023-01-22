import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.css']
})
export class DayComponentComponent {
  @Input() month="";
  @Input() year=0;
  @Input() day=0;

}
