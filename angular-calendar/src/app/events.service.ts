import { Injectable } from '@angular/core';
import { Event } from './models/event';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of, Subject} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})

export class EventsService {



  private url = 'http://localhost:3000/events';

  httpOptions: { headers: HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private errorHandlerService:ErrorHandlerService, 
    private http: HttpClient) { }

  getEvents(Month:string, Day:number, Year:number):Observable<Event[]>{
    return this.http.get<Event[]>(`${this.url}/${Day}/${Month}/${Year}`,{ responseType: "json"}).pipe(
      tap((_) => console.log('fetched events')),
      catchError(
       this.errorHandlerService.handleError<Event[]>("get", [])
      ));
  }

  addEvents(newEvent:Event): Observable<any>{
    console.log(JSON.stringify(newEvent));
    return this.http.post<Event>(this.url, JSON.stringify(newEvent), this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<any>("post")
      ));
    }

    deleteEvents(id:number): Observable<any>{
      console.log(id);
      const url = `http://localhost:3000/events/${id}`;
      return this.http.delete<Event>(url, this.httpOptions).pipe(
        catchError(
          this.errorHandlerService.handleError<any>("delete")
        ));
      }
}




