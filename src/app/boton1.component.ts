import { Component, Input } from '@angular/core';

@Component({
  selector: 'miboton1',
  templateUrl: 'boton1.component.html',
  styleUrls: ['./app.component.css'],
})
export class Boton1Component {
  @Input() name: string;
}