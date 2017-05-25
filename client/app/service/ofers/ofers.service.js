const ofersService = ($http) => {

  const obtener() => {
    const url = "http://13.84.167.160:5000/ofertas";
    
  };
};

export default ofersService;


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarwarsService {

  constructor(private http: Http) { }

  listCategory(category: string) {
    const url = `http://swapi.co/api/${category}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.onError);
  }

  onError(error) {
    console.log(`Error ${error} al consumir SWAPI`);
    return Promise.reject(error.message || error);
  }

}
