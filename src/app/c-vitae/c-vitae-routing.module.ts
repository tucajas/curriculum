import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { EscuelasComponent } from './escuelas/escuelas.component';
import { InformaticaComponent } from './informatica/informatica.component';
import { TitulosComponent } from './titulos/titulos.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'capacitaciones',
        component: CapacitacionesComponent
      },
      {
        path:'escuelas',
        component:EscuelasComponent
      },
      {
        path:'informatica',
        component:InformaticaComponent
      },
      {
        path: 'titulos',
        component: TitulosComponent
      },
      {
        path:'trabajos',
        component: TrabajosComponent
      },
      {
        path:'contacto',
        component: ContactoComponent
      },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CVitaeRoutingModule { }
