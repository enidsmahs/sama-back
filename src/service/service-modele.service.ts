import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceModeleService {

  modele: any;

  setModele(modele) {
    this.modele = modele;
  }

  constructor(private http: HttpClient) { }


  saveModele() {
    return this.http.post('', this.modele).subscribe((res) => {
      alert('preference enrégistrée...');
    }, err => {
      console.log('Error');
    });
  }

}
