import { Router } from '@angular/router';
import { ErrorHandlerService } from './../../error-handler.service';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-for-login',
  templateUrl: './for-login.component.html',
  styleUrls: ['./for-login.component.scss']
})
export class ForLoginComponent  {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
    ){}

  login(user: string, password: string){
    this.auth.login(user, password)
    .then(() => {
      this.router.navigate(['/']);
    })
    .catch(error => {
      this.errorHandler.handle(error);
    });
  }

}
