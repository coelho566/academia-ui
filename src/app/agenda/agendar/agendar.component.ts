import { EventCalendar } from './../../aluno/model';
import { FormControl } from '@angular/forms';
import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/error-handler.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {

  date: Date;
  events = new EventCalendar();
  dados = [];

  constructor(
    private agendaService: AgendaService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService
    ){}

  ngOnInit(): void {
    this.cunsultar();
  }



  salvar(form: FormControl){
    this.agendaService.adicionar(this.events)
    .then(events => {
        this.events = events,
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });
        this.router.navigate(['/agenda']);
        this.cunsultar();
    }).catch(
      erro => this.errorHandler.handle(erro)
      );
  }

  cunsultar(){
    this.agendaService.cunsultar()
    .then(dados =>{
      this.dados = dados;
    });
  }



}
