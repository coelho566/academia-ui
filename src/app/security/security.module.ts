import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';
import { ForLoginComponent } from './for-login/for-login.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [ForLoginComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['api/oauth/token']
      }
    }),
  ],
  exports:[
    ForLoginComponent
  ],
  providers:[
    JwtHelperService
  ]
})
export class SecurityModule { }
