import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CVitaeRoutingModule } from './c-vitae-routing.module';
import { HomeComponent } from './home/home.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { TitulosComponent } from './titulos/titulos.component';
import { EscuelasComponent } from './escuelas/escuelas.component';
import { InformaticaComponent } from './informatica/informatica.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    TrabajosComponent,
    CapacitacionesComponent,
    TitulosComponent,
    EscuelasComponent,
    InformaticaComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    CVitaeRoutingModule,
    MaterialDesignModule
  ]
})
export class CVitaeModule { }
