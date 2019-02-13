import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiceConfigService} from './service-config.service';


@Injectable()
export class ServiceCommandeService {

  constructor(private http: HttpClient, private url: ServiceConfigService) { }


  getCommande() {
    return this.http.get(this.url.host()+'/getAllCommande').map(res => res);
  }

}
