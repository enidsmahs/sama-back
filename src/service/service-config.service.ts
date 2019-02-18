import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ServiceConfigService {
  constructor() { }

  host() {
    return 'http://127.0.0.1:8080';
  }
  
}
