import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceClientService {

  clients: any;

  setClient(clients) {
    this.clients = clients;
  }

  constructor(private http: HttpClient) { }


  saveClient () {
    return this.http.post('http://192.168.1.123:8080/saveClient', this.clients)
      .subscribe(
        (res) => {
          alert('collection enrégistrée...');
        },
        err => {
          console.log('Error');
        });
  }

}
