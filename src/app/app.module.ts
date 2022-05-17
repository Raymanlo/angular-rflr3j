import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Contenido1Component } from './contenido1/contenido1.component';
import { Contenido2Component } from './contenido2/contenido2.component';
import { Contenido3Component } from './contenido3/contenido3.component';
import { Contenido4Component } from './contenido4/contenido4.component';
import { Boton1Component } from './boton1.component';
import { CerradoComponent } from './cerrado/cerrado.component';
//Para hacer funcionar el servicio inyectable
import { Servicio } from './servicio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,
    Contenido1Component,
    Contenido2Component,
    Contenido3Component,
    Contenido4Component,
    Boton1Component, CerradoComponent],
  bootstrap:    [ AppComponent ], 
  providers: [Servicio]
})
export class AppModule { }
