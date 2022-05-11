import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'micontenido2',
  templateUrl: 'contenido2.component.html',
  //styleUrls: ['./app.component.css'],
})
export class Contenido2Component {
  cont2 = 'The Terminator';
  sinopsis2 =
    ' En un futuro en el que la Humanidad está esclavizada por las máquinas, John Connor, nacido' +
    ' en los años 80, lidera la resistencia. Para vencer a los rebeldes, las máquinas envían al androide' +
    ' Terminator al pasado para asesinar a la madre de John Connor e impedir así su nacimiento.';

  //Mandar aviso al padre
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  dato="0";
  @Output() seHaCerrado = new EventEmitter<String>();
  tab="Componente 2";
  sendData(){
    this.parentFunction.emit(this.dato);
    this.seHaCerrado.emit(this.tab);
  }
}