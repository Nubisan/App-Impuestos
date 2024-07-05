import { Component } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../models/Gasto';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {

  gastos:Gasto[]=[]; 

  constructor(private gastoService:GastoService) {
    this.gastoService.obtenerDatos().subscribe(data => 
      { 
        console.log(data); 
        this.gastos=data; 
      });
    
  }

}
