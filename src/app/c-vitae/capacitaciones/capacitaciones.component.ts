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
  subtitulos: string[] = [
    'Auditor de Calidad, Extension:  "Cent N° 35"',
    'Componentes electronicos, Extension:    "Philips"',
    'Deteccion de fallas, Extension:   "UTN"',
    'Control de procesos productivos y no conformidades, Extension: "Cent n° 35"',
    'Operador de pc, Extension: "Instituto Dins"',
    'Esd y Soldering, Extension: "Philips"',
    'Iso 14001, Extension: "Famar"',
    'Seminario de Marketing, Extension: "UTN"',
    'Calidad Total, Extension: "Cent N° 35"',

     
  ]
  selectedImage: string | null = null;

  enlargeImage(image: string) {
    this.selectedImage = image;
  }

  closeEnlargedView() {
    this.selectedImage = null;
  }
}
