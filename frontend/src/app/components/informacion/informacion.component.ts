import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

  constructor(){}
  ngOnInit(): void{}

  deducibles = [
    {'gasto':'Vivienda', 'descripcion':'Corresponde a los desembolsos destinadosa urbanización, la construcción y remodelacion de viviendas para el publico en general', 'valor': '500', 'src':'../assets/vivienda.jpg'}, 
    {'gasto': 'Salud', 'descripcion':'Corresponde a los desembolsos destinadosa urbanización, la construcción y remodelacion de viviendas para el publico en general', 'valor': '1000', 'src':'../assets/salud.jpg'},
    {'gasto': 'Entretenimiento', 'descripcion':'Corresponde a los desembolsos destinadosa urbanización, la construcción y remodelacion de viviendas para el publico en general', 'valor': '500', 'src':'../assets/entretenimiento.jpg'},
    {'gasto': 'Educación', 'descripcion':'Corresponde a los desembolsos destinadosa urbanización, la construcción y remodelacion de viviendas para el publico en general', 'valor': '2500', 'src':'../assets/educacion.jpg'},
    {'gasto': 'Vestimenta', 'descripcion':'Corresponde a los desembolsos destinadosa urbanización, la construcción y remodelacion de viviendas para el publico en general', 'valor': '500', 'src':'../assets/vestimenta.jpg'}
  ];

  informacion(deducible:string) {
    // Aquí podrías buscar el deducible por su nombre y mostrar su descripción
    for (let i = 0; i < this.deducibles.length; i++) {
        if (deducible === this.deducibles[i].gasto) {
            alert('El valor del deducible de ' + deducible + ': ' + this.deducibles[i].valor);
            break; // Termina el bucle una vez que se encuentra el deducible
        }
    }
}

  borrarDeducible(deducible: string) {
      // Aquí se elimina el deducible que coincide con el nombre dado
      for (let i = 0; i < this.deducibles.length; i++) {
          if (deducible === this.deducibles[i].gasto) {
              this.deducibles.splice(i, 1);
              break; // Termina el bucle una vez que se elimina el deducible
          }
      }
  }

}
