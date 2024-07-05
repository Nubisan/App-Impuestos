import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-impuesto',
  templateUrl: './impuesto.component.html',
  styleUrls: ['./impuesto.component.css']
})

export class ImpuestoComponent {

  alimentacion = new FormControl('', [
    Validators.required,
    Validators.max(3809.65),
  ]);

  vivienda = new FormControl('', [
    Validators.required,
    Validators.max(3809.65),
  ]);

  educacion = new FormControl('', [
    Validators.required,
    Validators.max(3809.65),
  ]);

  vestimenta = new FormControl('', [
    Validators.required,
    Validators.max(3809.65),
  ]);

  salud = new FormControl('', [
    Validators.required, 
    Validators.max(3809.65)
  ]);

  sueldoAnual = new FormControl('');

  datosRecopilados: any[]=[];

  get formInvalid(): boolean {
    return (
      this.alimentacion.invalid ||
      this.vivienda.invalid ||
      this.educacion.invalid ||
      this.vestimenta.invalid ||
      this.salud.invalid
    );
  }

  get totalSum(): number {
    return (
      parseFloat(this.alimentacion.value || '0') +
      parseFloat(this.vivienda.value || '0') +
      parseFloat(this.educacion.value || '0') +
      parseFloat(this.vestimenta.value || '0') +
      parseFloat(this.salud.value || '0')
    );
  }
  
  sumaExcedida(): boolean{
    return this.totalSum > 15238.60;
  }

  get baseImponible(): number {
    const ingresos = parseFloat(this.sueldoAnual.value || '0');
    const gastos = this.totalSum;

    return ingresos - gastos;
  }

  tabla = [
    { fraccionBas: 0, excesohasta: 11722, impuestoBas: 0, excedente: 0 },
    { fraccionBas: 11722, excesohasta: 14930, impuestoBas: 0, excedente: 0.05 },
    { fraccionBas: 14930, excesohasta: 19385, impuestoBas: 160, excedente: 0.10 },
    { fraccionBas: 19385, excesohasta: 25638, impuestoBas: 606, excedente: 0.12 },
    { fraccionBas: 25638, excesohasta: 33738, impuestoBas: 1356, excedente: 0.15 },
    { fraccionBas: 33738, excesohasta: 44721, impuestoBas: 2571, excedente: 0.20 },
    { fraccionBas: 44721, excesohasta: 59537, impuestoBas: 4768, excedente: 0.25 },
    { fraccionBas: 59537, excesohasta: 79388, impuestoBas: 8472, excedente: 0.30 },
    { fraccionBas: 79388, excesohasta: 105580, impuestoBas: 14427, excedente: 0.35 },
    { fraccionBas: 105580, excesohasta: Number.POSITIVE_INFINITY, impuestoBas: 23594, excedente: 0.37 },
  ];

  obtenerValores(){
    for(let i = 0; i < this.tabla.length; i++){
      if (this.baseImponible <= this.tabla[i].excesohasta && this.baseImponible >= this.tabla[i].fraccionBas) {
        this.fraccionBas = this.tabla[i].fraccionBas;
        this.excesohasta = this.tabla[i].excesohasta;
        this.impuestoBas = this.tabla[i].impuestoBas;
        this.impExcedente = this.tabla[i].excedente;
        break;  // Salir del bucle una vez encontrado el rango correcto
      }    
    }
  }

  // Propiedades para almacenar los valores de la tabla
  fraccionBas: number = 0;
  excesohasta: number = 0;
  impuestoBas: number = 0;
  impExcedente: number = 0;

  get excedente(): number {   
    return this.baseImponible - this.fraccionBas;
  }

  get valorExcedente(): number {
    return this.excedente * this.impExcedente;
  }

  get impuestoRenta(): number {
    return this.impuestoBas + this.valorExcedente;
  }

  // Guardar datos en un archivo JSON
  guardarDatos(): void {
    const registro = {
      ingresoAnual: this.sueldoAnual.value,
      baseImponible: this.baseImponible,
      excedente: this.excedente,
      valorExcedente: this.valorExcedente,
      impuestoRenta: this.impuestoRenta,
    };

    this.datosRecopilados.push(registro);

    alert('Datos guardados en un JSON');
  }
}