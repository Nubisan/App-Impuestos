import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario: FormGroup;
  usersService = inject(UsersService);

  constructor(private router: Router){
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    this.usersService.login(this.formulario.value).subscribe(res =>{
      this.usersService.setToken(res.token)
      this.router.navigate(['/'])
    })
  }


}
