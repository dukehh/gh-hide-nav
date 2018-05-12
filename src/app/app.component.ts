import { Component, VERSION } from '@angular/core';
import { program } from '../environments/version';


@Component({
  selector: 'gh-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  vMarker: string;

  constructor() {
    localStorage.setItem('Encrypted', '64756b656868');
    localStorage.setItem('User', 'duke');

    this.vMarker = `
${program.name}-\
${program.version}-\
${program.date}-\
${program.image}-\
Ang.v${VERSION.full}
`;
    console.log(this.vMarker);
  }

}
