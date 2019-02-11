import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Categorie} from '../app/model/model.categorie';
import {ServiceConfigService} from './service-config.service';


@Injectable()
export class ServiceCategorieService {

  constructor(private http: HttpClient, private url: ServiceConfigService) { }

  saveCategorie (categorie: Categorie) {
    return this.http.post(this.url.host()+'/saveCategorie', categorie).subscribe(
      (res) => {
        alert('catégorie enrégistrée...');
      },
      err => console.error(err)
    );
  }

  getAllCategorie () {
    return this.http.get(this.url.host()+'/getAllCategorie').map(data => data);
  }

  deleteCategorie (id: number) {
    return this.http.get(this.url.host()+'/deleteCategorie/' + id).subscribe(
      (res) => {
        alert('catégorie supprimmée...');
      },
      err => console.error(err)
    );
  }

  updateCat(Cate: Categorie, id: number) {

  }

}
