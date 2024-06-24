import { Component } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent {

  images: string[] = [
    './assets/tituloUtn.jpg',
    './assets/tituloterciario.jpg',
    './assets/titulosecundario.jpg',
    // Agrega más URLs de imágenes aquí
  ];
  subtitulos: string[] = [
    'Titulo universitario',
   
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
