import {Component, OnInit, VERSION} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs/Observable';
import {program} from '../../../environments/version';

declare var particlesJS: any;

@Component({
  selector: 'gh-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn$: Observable<{}>;
  currentUser: any = false;

  constructor(private authService: AuthService) {
  }


  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json');
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(val => this.currentUser = localStorage.getItem('currentUser'));
  }

  onLogout() {
    this.authService.logout();
  }

  onRightClick(event) {
    alert(`\n🌹About:\n${String.fromCharCode(862).repeat(9)}\n${program.name}-${program.version}-${program.date}-Ang.v${VERSION.full} `);
    return false;
  }
}

