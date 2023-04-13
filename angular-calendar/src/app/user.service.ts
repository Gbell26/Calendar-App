import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/login';

  httpOptions: { headers: HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private errorHandlerService:ErrorHandlerService, 
    private http: HttpClient) { }

  validatePassword(username:string):Observable<Partial<User>>{
    return this.http.get<Partial<User>>(`${this.url}/${username}`,{ responseType: "json"}).pipe(
      tap((_) => console.log('fetched events')),
      catchError(
       this.errorHandlerService.handleError<Partial<User>>("get")
      ));
  }

  addUser(newUser:User): Observable<any>{
    console.log(JSON.stringify(newUser));
    return this.http.post<User>(this.url, JSON.stringify(newUser), this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<any>("post")
      ));
    }

    deleteEvents(username:string): Observable<any>{
      console.log(username);
      const url = `http://localhost:3000/login/${username}`;
      return this.http.delete<User>(url, this.httpOptions).pipe(
        catchError(
          this.errorHandlerService.handleError<any>("delete")
        ));
      }
}
