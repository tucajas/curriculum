import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './c-vitae/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  {
    path:'curriculum',
    loadChildren:()=>import('./c-vitae/c-vitae.module').then(m=>m.CVitaeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
