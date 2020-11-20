import { AlunoService } from './aluno.service';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';

import {PanelModule} from 'primeng/panel';
import { DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    PanelModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    BrowserModule,
    ButtonModule,
    ToolbarModule,
    DialogModule,
    CalendarModule,
    InputMaskModule,
    SelectButtonModule,
    TableModule

  ],
  entryComponents:[
    CadastroComponent
  ],
  providers:[
    AlunoService

  ]
  
})
export class AlunoModule { }
