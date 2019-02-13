import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://192.168.1.120:8080/';
@Injectable()
export class ServiceModeleService {

  modele: any;

  setModele(modele) {
    this.modele = modele;
  }

  constructor(private http: HttpClient) { }


  saveModele() {
    return this.http.post('http://192.168.1.123:8080/saveModele', this.modele)
      .map(res => res);
  }

  getModele() {
    return this.http.get('http://192.168.1.123:8080/getAllModele').map(res => res);
  }

}
