import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceConfigService} from './service-config.service';

@Injectable
export class ServiceAdminService {

  constructor (private http: HttpClient, private url: ServiceConfigService) {}

  

}
