import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  allImages: any[] = [];
  filterBy: string = 'all';

  constructor(private imagesService: ImagesService) {
    this.allImages = this.imagesService.getImages();
  }

  ngOnInit(): void {
    //recupero los datos seteados en el storage 
    console.log('leemos datos de localStorage' + localStorage.getItem('sessionUser'));

    console.log('leemos datos de sessionStorage' + sessionStorage.getItem('sessionPassword'));

    //eliminar datos de sessionStorage
    sessionStorage.removeItem('sessionPassword');
    //eliminar datos de LocalStorage
    localStorage.removeItem('sessionUser');

  }

}
