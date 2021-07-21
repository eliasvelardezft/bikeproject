import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //public bikes: RootObjectBike[];
  public bikes: any;
  constructor(private bikeService: BikeService) { 

  }

  ngOnInit(): void {
    this.getAllBikes();
    console.log("la api rest me trajo lo siguiente :");
    console.dir(this.bikes);//mostramos la rezpuesta de la api por la consola 
  }


  getAllBikes() {
    this.bikeService.getBikes().subscribe(
      data => {
        this.bikes = data,
        console.log(this.bikes);
      },
      err => { console.error(err) },
      () => console.log('Bikes Loaded')
    );
  }

}

//interfaceamos la respuesta del back end 
export interface RootObjectBike {
  id: number;
  name: string;
  email?: string; //con el signo de pregunta definimos campos que puede no llegar a estar!
  phone?: string;  
  model: string;
  serialNumber: string;
  purchasePrice: number;
  purchaseDate: string;
  contact: boolean
}


