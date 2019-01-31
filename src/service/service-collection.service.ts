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
    return this.http.post('http://192.168.1.123:8080/saveCollection', this.collection)
      .subscribe(
        (res) => {
          alert('collection enrégistrée...');
        },
        err => {
          console.log('Error');
        });
  }

  getAllCollection () {
    return this.http.get('http://192.168.1.123:8080/getAllCollection').map(data => data);
  }


}
