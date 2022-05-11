import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';


//import arregloPelicula from './arregloP.json';

@Component({
  selector: 'micontenido4',
  templateUrl:'contenido4.component.html'
  //styleUrls: ['./app.component.css'],
})
export class Contenido4Component implements OnInit, OnDestroy, OnChanges{
  //Mandar aviso al padre
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  //@Output() indexFunction: EventEmitter<any> = new EventEmitter();
  @Output() indexFunction = new EventEmitter<any>();

  @Output() seHaCerrado = new EventEmitter<String>();
  dato="0";
  cuenta=0;
  contador2=0;
  tab="Componente 4";
  
  //Definir el setter y getter
  private micadena: string = "";
  get getCadena(): string {
    return this.micadena;
  }

  set setCadena(val: string) {
    //do some extra work here
    this.micadena = val;
  }
  ngOnInit(){
    console.log(this.cuenta2);
    //this.parentFunction2.emit(6); 
    this.cuenta = this.indexH;
    console.log(this.cuenta);
    /*for(let j=0;j<this.indexH;j++){
      this.arregloMod[j] = this.arregloPeli[j];
    }*/
    this.micadena="";
    //Inciar arregloMod
    this.arregloMod = [];  
    //(<HTMLInputElement>document.getElementById('searchBox')).value="";
  }
  ngOnDestroy(){
    this.indexFunction.emit(this.cuenta2);
    //console.log("Algo pasa");
    //console.log(this.arregloMod);
    //console.log(this.parentFunction2.emit(this.cuenta2));
    this.micadena="";
    //(<HTMLInputElement>document.getElementById('searchBox')).value="";
    //document.getElementById('searchBox').setAttribute('value', this.micadena);
  }

  ngOnChanges(){
    var micadena2 = this.micadena;
    var arrPeli = this.arregloPeli;
    var arrMod = this.arregloMod;

    let m1 = arrPeli.filter(z=>{
      return z.name.toString().includes((<HTMLInputElement>document.getElementById('searchBox')).value.toString());
    });
    arrMod = m1;
    console.log(micadena2);
    this.arregloMod = arrMod;
    console.log("miarrmod", arrMod);  
  }

  
  constructor(){}
  
  sendData(){
    this.parentFunction.emit(this.dato);
    this.seHaCerrado.emit(this.tab);
  }


arregloPeli = [
  {
    name: 'Avengers: Endgame',
    distributor: 'Walt Disney Studios Motion Pictures',
    year: 2019,
    director: 'Anthony and Joe Russo', 
    boxOffice: '$2 797 501 328' 
  },
  {
    name: 'Deadpool 2',
    distributor: 'Walt Disney Studios Motion Pictures',
    year: 2018,
    director: 'David Leitch', 
    boxOffice: '$785 546 611' 
  },
  {
    name: 'Terminator 2: Judgement Day',
    distributor: 'TriStar Pictures',
    year: 1991,
    director: 'James Cameron', 
    boxOffice: '$520 881 154' 
  },
  {
    name: 'Back to the future',
    distributor: 'Universal Pictures',
    year: 1985,
    director: 'Robert Zemeckis', 
    boxOffice: '$381 109 765' 
  },
  {
    name: 'Edge of Tomorrow',
    distributor: 'Warner Bros. Pictures',
    year: 2014,
    director: 'Doug Liman',
    boxOffice: '$370 541 256' 
  },
  {
    name: 'Tenet',
    distributor: 'Warner Bros. Pictures',
    year: 2020,
    director: 'Christopher Nolan', 
    boxOffice: '$365 609 000'
  },
]


cuenta2 = this.arregloPeli.length;

@Input() contadorH;
@Input() indexH;

//cuenta=this.indexH;
///this.contadorH=0;
arregloMod= [];

//4.25 y 4.5
}