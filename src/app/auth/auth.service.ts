import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from './user';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {
  }

  login(user: User): boolean {
    localStorage.removeItem('currentUser');
    if (user.username !== '' && this.ghEncrypt(user.password)) {
      localStorage.setItem('currentUser', user.username);
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    this.router.navigate(['/home']);
  }

  ghEncrypt(s: String): boolean {
    const a = CryptoJS.enc.Utf8.parse(s.toString());
    const b = localStorage.getItem('Encrypted');
    return ( a.toString() === b);
  }
}
