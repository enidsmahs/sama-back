import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiceConfigService} from './service-config.service';

@Injectable()
export class ServiceClientService {

  clients: any;

  setClient(clients) {
    this.clients = clients;
  }

  constructor(private http: HttpClient, private url: ServiceConfigService) { }

  getAllClient() {
    return this.http.get(this.url.host()+'/getAllClient').map(res => res);
  }

  saveClient () {
    return this.http.post(this.url.host()+'/saveClient', this.clients);
  }

  deleteClient(id: number) {
    return this.http.delete(this.url.host() + '/deleteClientById/' + id)
  }

  updateClient() {

  }

}
