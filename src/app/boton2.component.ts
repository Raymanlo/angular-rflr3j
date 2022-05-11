import { Component, Input } from '@angular/core';

@Component({
  selector: 'miboton2',
  template:
  '<style>button {color: black;padding: 20px; margin-left: 20%;background-color:orange;'+
  '}</style>'
  +'<button>{{texto}}</button>',
  styleUrls: ['./app.component.css'],
})
export class Boton2Component {
  texto='Pelicula2';
}