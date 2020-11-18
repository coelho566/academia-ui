import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendarComponent } from './agendar/agendar.component';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';



@NgModule({
  declarations: [AgendarComponent],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    PanelModule,
    CalendarModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputMaskModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    AgendarComponent
  ]
})
export class AgendaModule { }
