import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  constructor() {}
  ngOnInit(): void {}

  ruc: string = '99999999001';
  valor: number = 0.0;
  gasto: string = 'Ninguno';
  resultado: string = '';
  ruta='assets/datos.json'; 

  onSubmit() {
    const datosFormulario = {
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto,
    };

    // Convertir la factura a JSON
    this.resultado = JSON.stringify(datosFormulario);

    // Limpiar el formulario después de guardar los datos
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.ruc = '99999999001';
    this.valor = 0.0;
    this.gasto = 'Ninguno';
  }
}
