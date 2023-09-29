import { Component } from '@angular/core';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent {

  images: string[] = [
    './assets/djangoAngularUdemy.jpg',
    './assets/pythonUniversidad.jpg',
    
    // Agrega más URLs de imágenes aquí
  ];
  subtitulos: string[] = [
    'Django, postgres,Angular. Curso Udemy',
     'Python. Universidad de lujan',

     
  ]
  selectedImage: string | null = null;

  enlargeImage(image: string) {
    this.selectedImage = image;
  }

  closeEnlargedView() {
    this.selectedImage = null;
  }

}
