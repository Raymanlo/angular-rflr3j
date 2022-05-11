import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  //name = 'Angular';

  ngOnInit(){
    //if(this.valorE) 
    console.log("Renderizando ", this.valorE);
    /*if(this.valorE=="4"){
      this.contadorP++;
    }*/
  }

  opciones = {
    opcion1: "1",
    opcion2: "2",
    opcion3: "3",
    opcion4: "4",
    inicial: "0"
  };
  //bole: boolean = false;
  valorE=this.opciones.inicial;
  //valorngif = "valorE == opciones.opcion1";

  contadorP=-1;
  indexP=0;
  indexAux=0;
  tab="";
  mostrar(n : string){
    //this.valorngif = "valorE == opciones.opcion"+n+"";
    this.valorE=n;
    //this.bole=true;
    if(n==="4"){
      this.contadorP++;
    }
    this.mostrarTabla(this.contadorP);
  };

  mostrarTabla(con){
    switch(con){
      case 0:
        this.indexP = con;
        break;
      case 1:
        this.indexP = con;
        break;
      default:
        //this.parentFunction2(con);
        this.indexP = this.indexAux;
        //this.indexP=6;
        break;
    }
  }
  //name="";
  parentFunction(data){

    //IMprimir de child
    this.valorE=data;
    this.contadorP=-1;
    this.indexP=0;
    //console.log("Aqui hay", data);
    //this.indexAux=data.cuenta;
  }

  indexFunction(numero){

    //IMprimir de child
    //this.valorE=data.dato;
    this.indexAux=numero;
    //console.log("recibo ", numero);
    //this.contadorP=numero.contador2;
  }

  seHaCerrado(contenido){
    this.tab=contenido+" se ha cerrado";
  }
  
}
