import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForLoginComponent } from './for-login/for-login.component';

const routes: Routes = [
  { path: 'login', component: ForLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
