import { EventCalendar } from './../aluno/model';
import { CalendarService } from './calendar.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { CalendarOptions} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  events: any[];

  calendarOptions: CalendarOptions;

    header: any;
    calendarVisible: boolean;

  constructor(private eventService: CalendarService){

  }
  ngOnInit(): void {
    this.eventService.getEvents().then(events => {this.events = events; });
    console.log(this.events);
    this.calendarVisible = true;
    this.calendarOptions = {
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      initialEvents: INITIAL_EVENTS,
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      events: this.events

    };
  }

}
