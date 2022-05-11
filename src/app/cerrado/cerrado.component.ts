import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'cerrado',
  templateUrl:'cerrado.component.html',
  //styleUrls: ['./app.component.css'],
})

export class CerradoComponent {
  @Input () componenteCerrado: string;
}