import { Component } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent {

  images: string[] = [
    './assets/titulouniversitariotramite.jpg',
    './assets/tituloterciario.jpg',
    './assets/titulosecundario.jpg',
    // Agrega más URLs de imágenes aquí
  ];
  subtitulos: string[] = [
    'Titulo universitario        (en tramite)',
    'Titulo terciario',
     'Titulo secundario',

     
  ]
  selectedImage: string | null = null;

  enlargeImage(image: string) {
    this.selectedImage = image;
  }

  closeEnlargedView() {
    this.selectedImage = null;
  }
}
