import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
    
    activeItem: MenuItem;

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
            {label: 'Agendar', icon: 'pi pi-fw pi-calendar', routerLink: '/agenda'},
            {label: 'Alunos', icon: 'pi pi-fw pi-user', routerLink: '/cadastro'},
            {label: 'Sair', icon: 'pi pi-fw pi-power-off'}
        ];
        
        this.activeItem = this.items[0];
    }

}
