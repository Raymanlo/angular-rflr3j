import { Component, Input } from '@angular/core';

@Component({
  selector: 'miboton3',
  template:
  '<style>button {color: black;padding: 20px; margin-left: 20%;background-color:orange;'+
  '}</style>'
  +'<button>{{texto}}</button>',
  styleUrls: ['./app.component.css'],
})
export class Boton3Component {
  texto='Pelicula3';
}