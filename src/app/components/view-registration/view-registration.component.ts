import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeReg: any;
  constructor(private bikeService: BikeService, private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    //leemos el parametro que recibimos en la ruta ("id") y lo 
    //utilizamos para realizar el Request
    this.getBike(this.route.snapshot.params.id)
  }

  getBike(id: number) {
    this.bikeService.getOneBike(id).subscribe(
      data => {
        this.bikeReg = data;
      }
    )

  }

}
