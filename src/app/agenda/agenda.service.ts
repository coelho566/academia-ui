import { EventCalendar } from './../aluno/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = 'api/api/schedule';

  constructor(private http: HttpClient) { }

  adicionar(aluno: EventCalendar): Promise<any> {

    return this.http.post<EventCalendar>(this.url, aluno).toPromise();
  }

  cunsultar(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
}
