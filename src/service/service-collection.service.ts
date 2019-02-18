import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiceConfigService} from './service-config.service';
@Injectable()
export class ServiceCollectionService {

  constructor(private http: HttpClient, private url: ServiceConfigService) { }

  collection: any;

  setCollection(collection) {
    this.collection = collection;
  }

  saveCollection () {
    return this.http.post(this.url.host()+'/saveCollection', this.collection)
      .map(res => res);
  }

  getAllCollection () {
    return this.http.get(this.url.host()+'/getAllCollection').map(data => data);
  }

  getCollectionDetails (id: number) {
    return this.http.get(this.url.host()+'/getCollectionDetails/' + id);
  }

  deleteCollection (id: number) {
    return this.http.get(this.url.host()+'/deleteCollection/' + id);
  }

  updateCollection() {

  }


}
