import { Injectable } from '@angular/core';
// importo el HttpClient
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  //inyecto en el constructor el httpClient
  constructor(private http: HttpClient) { }

  //este metodo nos retornara todas las bicicletas con sus clientes que estan 
  //cargados en en back end (API rest)
  getBikes() {
    return this.http.get('/server/api/v1/bikes');
  }
  //este metodo insertara un nuevo registro de bike en la base de datos 
  //del back end 
  createdBikeRegistration(bike: any) {
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);

  }
  //este metodo nos retorna un registro por id 
  getOneBike(id: number) {
    return this.http.get('/server/api/v1/bikes/' + id)
  }

}
