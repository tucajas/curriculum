import { Component } from '@angular/core';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent {

  images: string[] = [
    './assets/auditorCalidad.jpg',
    './assets/componentesElectronicos.jpg',
    './assets/deteccionFallasUtn.jpg',
    './assets/controlProductivos.jpg',
     './assets/dins.jpg',
     './assets/esdResoldering.jpg',
     './assets/iso14001.jpg',
     './assets/marketing.jpg',
     './assets/totalkaisen.jpg',
    
    // Agrega más URLs de imágenes aquí
  ];
  selectedImage: string | null = null;

  enlargeImage(image: string) {
    this.selectedImage = image;
  }

  closeEnlargedView() {
    this.selectedImage = null;
  }
}
