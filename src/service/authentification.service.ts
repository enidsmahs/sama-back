import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ServiceConfigService} from './service-config.service';
import {SamaLoginModel} from '../app/model/login';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private config: ServiceConfigService
  ) { }


  login(username: string, password: string) {
    return this.http.post<SamaLoginModel>(this.config.host()+'/connexionUser', {
      login: username,
      mdp: password
    });
  }

  register() {

  }


}
