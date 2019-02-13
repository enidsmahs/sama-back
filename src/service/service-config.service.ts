import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ServiceConfigService {
  constructor() { }

  host() {
    return 'http://192.168.1.104:8080';
  }
  
}
