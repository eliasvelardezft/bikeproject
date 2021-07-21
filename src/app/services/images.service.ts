import { Injectable } from '@angular/core';
import { imageBikeObject } from '../components/image-details/image-details.component';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  allImages: any = [];

  constructor() {

  }
  //este metodo me retorna las configuraciones de todas las imagenes
  getImages() {
    return this.allImages = ImagesDetails.slice(0);
  }
  //este metodo me retorna las configuraciones de una imagen en particular segun su id
  getImage(id: number) : imageBikeObject {
    return <imageBikeObject> ImagesDetails.slice(0).find(Images => Images.id == id);
  }

}

//esta costante contiene los datos de las imagenes de nuestra galeria 
const ImagesDetails = [
  { "id": 1, "brand": "adultosrc", "url": "assets/Images/bk1.jpg" },
  { "id": 2, "brand": "adultosrc", "url": "assets/Images/bk2.jpg" },
  { "id": 3, "brand": "adultosrc", "url": "assets/Images/bk3.jpg" },
  { "id": 4, "brand": "adultosrc", "url": "assets/Images/bk4.jpg" },

  { "id": 5, "brand": "bkeco", "url": "assets/Images/bkeco1.jpg" },
  { "id": 6, "brand": "bkeco", "url": "assets/Images/bkeco2.jpg" },
  { "id": 7, "brand": "bkeco", "url": "assets/Images/bkeco3.jpg" },
  { "id": 8, "brand": "bkeco", "url": "assets/Images/bkeco4.jpg" },

  { "id": 9, "brand": "bkmotor", "url": "assets/Images/bkmotor1.jpg" },
  { "id": 10, "brand": "bkmotor", "url": "assets/Images/bkmotor2.jpg" },
  { "id": 11, "brand": "bkmotor", "url": "assets/Images/bkmotor3.jpg" },
  { "id": 12, "brand": "bkmotor", "url": "assets/Images/bkmotor4.jpg" },
  { "id": 13, "brand": "bkmotor", "url": "assets/Images/bkmotor5.jpg" },

  { "id": 14, "brand": "juniorrc", "url": "assets/Images/bknenes1.jpg" },
  { "id": 15, "brand": "juniorrc", "url": "assets/Images/bknenes2.jpg" },
  { "id": 16, "brand": "juniorrc", "url": "assets/Images/bknenes3.jpg" },
  { "id": 17, "brand": "juniorrc", "url": "assets/Images/bknenes4.jpg" },

]