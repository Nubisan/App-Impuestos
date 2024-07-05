import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gasto } from '../models/Gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private httpclient: HttpClient) { 
    console.log('El servicio Http esta funcionando…')
  }

  configUrl='assets/datos.json'; 
 
 
  obtenerDatos(){ 
    return this.httpclient.get<Gasto[]>(this.configUrl); 
  } 
}
