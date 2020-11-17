import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-for-login',
  templateUrl: './for-login.component.html',
  styleUrls: ['./for-login.component.scss']
})
export class ForLoginComponent  {

 
  constructor(private auth: AuthService){}

  login(user: string, password: string){
    this.auth.login(user, password);
  }

}
