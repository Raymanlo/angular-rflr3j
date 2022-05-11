import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'micontenido1',
  templateUrl:'contenido1.component.html',
  //styleUrls: ['./app.component.css'],
})
export class Contenido1Component {
  //@Input() cont1: String;
  //@Input() bole: Boolean;
  cont1 = 'Volver al futuro';
  sinopsis1 =
    'El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco.' +
    ' Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955,' +
    ' año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro,' +
    ' debe conseguir que se conozcan y se casen. De lo contrario, su existencia no sería posible.';
    
    //Mandar aviso al padre
    @Output() parentFunction: EventEmitter<any> = new EventEmitter();
    dato="0";
    @Output() seHaCerrado = new EventEmitter<String>();
  tab="Componente 1";
    sendData(){
      this.parentFunction.emit(this.dato);
      this.seHaCerrado.emit(this.tab);
    }
}