import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiceConfigService} from './service-config.service';


@Injectable()
export class ServiceCommandeService {

  constructor(private http: HttpClient, private url: ServiceConfigService) { }


  getListeCommande() {
    return this.http.get(this.url.host()+'/getAllCommande');
  }

}
