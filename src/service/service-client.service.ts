import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceConfigService} from './service-config.service';

@Injectable()
export class ServiceClientService {

  clients: any;

  setClient(clients) {
    this.clients = clients;
  }

  constructor(private http: HttpClient, private url: ServiceConfigService) {
  }

  getAllClient() {
    return this.http.get(this.url.host() + '/getAllClient').map(res => res);
  }

  getClientById(id: number) {
    return this.http.get(this.url.host() + '/getClientById/' + id);
  }

  saveClient(client: any) {
    return this.http.post(this.url.host() + '/saveClient', client);
  }

  deleteClient(id: number) {
    return this.http.delete(this.url.host() + '/deleteClient/' + id);
  }

  updateClient() {

  }

}
