import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  url = 'api/api/schedule/event';

  constructor(private http: HttpClient) { }

  getEvents(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
}
