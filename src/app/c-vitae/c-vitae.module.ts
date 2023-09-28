import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CVitaeRoutingModule } from './c-vitae-routing.module';
import { HomeComponent } from './home/home.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { TitulosComponent } from './titulos/titulos.component';
import { EscuelasComponent } from './escuelas/escuelas.component';
import { InformaticaComponent } from './informatica/informatica.component';


@NgModule({
  declarations: [
    HomeComponent,
    TrabajosComponent,
    CapacitacionesComponent,
    TitulosComponent,
    EscuelasComponent,
    InformaticaComponent
  ],
  imports: [
    CommonModule,
    CVitaeRoutingModule
  ]
})
export class CVitaeModule { }
