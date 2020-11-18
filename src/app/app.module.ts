import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './error-handler.service';
import { AgendaModule } from './agenda/agenda.module';
import { AlunoModule } from './aluno/aluno.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';
import { AuthService } from './security/auth.service';
import { HttpClientModule } from '@angular/common/http';





FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    TabMenuModule,
    AppRoutingModule,
    SecurityModule,
    AlunoModule,
    HttpClientModule,
    AgendaModule
  ],
  providers: [
    AuthService,
    ErrorHandlerService,
    MessageService,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
