import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //creamos un array con todos los modelos de bicicletas
  models: string[] = [
    '14 Sony Bike',
    'Globo Carbon Fiber Race Series',
    'Master Bike',
    'bike Pro 2008 S',
    'Bike Brother model 1212f'
  ];
  dni: string | undefined;
  password: string | undefined;
  validMessage: string = "";
  validContact: string = "";
  bikeform: FormGroup;

  constructor(private bikeService: BikeService) {
    this.bikeform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      //validacion usar 01525552112
      phone: new FormControl('', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl(),
    })
  }

  submitRegistration() {
    console.log("valid: " + this.bikeform.valid);
    /*console.log("dirty: "+  this.bikeform.dirty);

    console.log("valid: "+ this.bikeform.valid);
    console.dir( this.bikeform.value.email);
    console.log(this.bikeform.value.contact)*/
    //console.log(this.bikeform.value);
    if (this.bikeform.valid) {

      this.bikeService.createdBikeRegistration(this.bikeform.value).subscribe(
        data => {
          //reseteamos y vaciamos los inputs del formulario
          this.bikeform.reset();
          this.validMessage = 'Su Formulario de Bike Se Envio Con Exito';
        }
      );
      ;
    } else {
      this.validMessage = 'Por favor complete todo los campos';

      // console.log(this.bikeform.value.contact != "true"  == true);

      // if(this.bikeform.value.contact != "true" && this.bikeform.value.contact != "false"){
      //   this.validContact = "Por Favor Complete con True o False";
      // }


    }
  }

  ngOnInit(): void {
    this.dni = '14564312';
    this.password = 'soyLaClaveEncryptada';
    //vamos a guardar los datos en session y local Storage mediante la API de starage

    localStorage.setItem('sessionUser', this.dni);
    sessionStorage.setItem('sessionPassword', this.password);


  }

}
