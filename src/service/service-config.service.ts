import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ServiceConfigService {
  constructor() { }

  host() {
    return '192.168.1.114:8080';
  }
  
}
