import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
export class Service {
       private data = new BehaviorSubject("")
       currentData = this.data.asObservable();

 constructor() { }

 setData(data:string) {
      this.data.next(data);
 }
}

