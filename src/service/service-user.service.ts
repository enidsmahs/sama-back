import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceConfigService} from './service-config.service';

@Injectable()
export class ServiceUserService {

  constructor(private http: HttpClient, private url: ServiceConfigService) {}

  user: any;

  setUser(user) {
    this.user = user;
  }

  getAllUser() {
    return this.http.get(this.url.host()+'/getAllUserDetails').map(res => res);
  }

  getAllRole() {
    return this.http.get(this.url.host()+'/getAllRole').map(res => res);
  }

  saveUserRole(user: any) {
    return this.http.post(this.url.host()+'/saveUserDetails', user);
  }

  deleteUserById(id: number) {
    return this.http.delete(this.url.host() + '/deleteUserById/' + id);
  }

  updateUserById(id: number) {

  }

}
