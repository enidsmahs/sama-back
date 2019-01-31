import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ServiceConfigService {
  constructor() { }

  host() {
    return '192.168.1.123:8080';
  }
  
}
