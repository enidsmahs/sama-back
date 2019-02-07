import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ServiceCollectionService {

  constructor(private http: HttpClient) { }

  collection: any;

  setCollection(collection) {
    this.collection = collection;
  }

  saveCollection () {
    return this.http.post('http://192.168.1.114:8080/saveCollection', this.collection)
      .map(res => res);
  }

  getAllCollection () {
    return this.http.get('http://192.168.1.114:8080/getAllCollection').map(data => data);
  }

  deleteCollection (id: number) {
    return this.http.get('http://192.168.1.114:8080/deleteCollection/' + id).subscribe(
      (res) => {
        alert('collection supprimmée...');
      },
      err => console.error(err)
    );
  }


}
