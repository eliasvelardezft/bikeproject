import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image:imageBikeObject ;
  idDeImagen:number;

  constructor(private imagesService: ImagesService, private route: ActivatedRoute) {
    console.log('recibimos el siguiente id en la url : ');
    console.log(this.route.snapshot.params['id']);

    this.idDeImagen = this.route.snapshot.params['id'];
    this.image = this.imagesService.getImage(this.idDeImagen);
    console.log(this.image);
  }


  ngOnInit(): void {


  }

}

export interface imageBikeObject {
  id: number;
  brand: string;
  url: string;
}
