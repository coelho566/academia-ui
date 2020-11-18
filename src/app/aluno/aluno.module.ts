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
    ButtonModule

  ],
  entryComponents:[
    CadastroComponent
  ],
  providers:[
    AlunoService

  ]
  
})
export class AlunoModule { }
