import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

const TOKEN = 'TOKEN';

@Injectable()
export class SessionService {

  constructor(
    private _router: Router
  ) {}

  setToken(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  logoutUser() {
    localStorage.removeItem(TOKEN);
    this._router.navigate(['/sama-login']);
  }
  
}
