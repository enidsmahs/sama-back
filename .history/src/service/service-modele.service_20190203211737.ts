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


  saveModele(f) {
    console.log(f);
  }

  getModele() {
    return this.http.get(url+'getAllModele').map(res => res);
  }

}
