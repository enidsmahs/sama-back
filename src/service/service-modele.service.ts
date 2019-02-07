import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';

const url = 'http://192.168.1.114:8080/';

@Injectable()
export class ServiceModeleService {

  modele: any;

  setModele(modele) {
    this.modele = modele;
  }

  constructor(private http: HttpClient) { }


  saveModele() {
    return this.http.post(url+'/saveModele', this.modele).subscribe(
      (res) => {
        alert('modele enrégistrée...');
      },
      err => {
        console.log('Error');
      });
  }

  getModele() {
    return this.http.get(url + '/getAllModele').map(res => res);
  }

  uploadFile1(modele: any, file: File[]): Observable<HttpEvent<{}>> {
    const formdata: FormData=new FormData();
    for (let i = 0; i > file.length; i++) {
      formdata.append('images', file[i]);
    }
    formdata.append('modele', new Blob([JSON.stringify(modele)], {
      type: 'application/json'
    }));
    const req= new HttpRequest('POST',url + '/saveModeleImage',formdata,{
      reportProgress:false,
    });
    return this.http.request(req);
  }

  deleteModele (id: number) {
    return this.http.delete(url + '/deleteModele/' + id).subscribe(
      (res) => {
        alert('modèle supprimmé...');
      },
      err => console.error(err)
    );
  }

  updateModele() {

  }

}
