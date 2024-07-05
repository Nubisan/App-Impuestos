import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  title = 'frontend';

  constructor(public usersService: UsersService){}

  Autenticacion(){
    return this.usersService.loggedIn();
  }
}
