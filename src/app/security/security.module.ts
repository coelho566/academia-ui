import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';
import { ForLoginComponent } from './for-login/for-login.component';


@NgModule({
  declarations: [ForLoginComponent],
  imports: [
    
    CommonModule,
    SecurityRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule

  ],
  exports:[
    ForLoginComponent
  ]
})
export class SecurityModule { }
