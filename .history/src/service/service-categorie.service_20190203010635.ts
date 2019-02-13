import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Categorie} from '../app/model/model.categorie';


@Injectable()
export class ServiceCategorieService {

  constructor(private http: HttpClient) { }

  saveCategorie (categorie: Categorie) {
    return this.http.post('http://192.168.1.111:8080/saveCategorie', categorie).subscribe(
      (res) => {
        alert('catégorie enrégistrée...');
      },
      err => console.error(err)
    );
  }

  getAllCategorie () {
    return this.http.get('http://192.168.1.123:8080/getAllCategorie').map(data => data);
  }

  deleteCategorie (id: number) {
    return this.http.get('http://192.168.1.123:8080/deleteCategorie/' + id).subscribe(
      (res) => {
        alert('catégorie supprimmée...');
      },
      err => console.error(err)
    );
  }

}
