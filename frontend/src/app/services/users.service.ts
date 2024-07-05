import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private baseURL: string;
  private router = inject(Router);

  constructor() {
    this.baseURL = "http://localhost:3000";
   }

  registro(formValue: any){

    //Me permite que mediante el metodo rxjs recuperar del observable 
    //que me devuelva la peticion sola la primera ejecucion, el primer valor devuelto y lo convierte en una promesa
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseURL}/registro`, formValue)
    )
  }

  login(formValue: any){

    //Me permite que mediante el metodo rxjs recuperar del observable 
    //que me devuelva la peticion sola la primera ejecucion, el primer valor devuelto y lo convierte en una promesa
     return this.httpClient.post<any>(`${this.baseURL}/ingreso`, formValue)
    
  }

   //verifica si el token existe
   loggedIn(){
    if(typeof localStorage !== 'undefined'){
      return !!localStorage.getItem('token'); //Si el token existe retorna True
    }else{
      return false
    }
     
  }

  setToken(token: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  getToken() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
