import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'gh-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit, AfterViewInit {
  isClicked: Boolean = false;
  isMouseDown: Boolean = false;
  wrapper: any;
  topLayer: any;
  handle: any;
  skew: any;
  delta: any;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.wrapper = document.getElementById('wrapper');
    this.topLayer = this.wrapper.querySelector('.top');
    this.handle = this.wrapper.querySelector('.handle');
    this.skew = 0;
    this.delta = 0;
    if (this.wrapper.className.indexOf('skewed') !== -1) {
      this.skew = 1000;
    }

  }

  onClick(e) {
    this.isClicked = !this.isClicked;
    console.log(`onClick: ${(this.isClicked) ? 'aktiv' : 'inaktiv'}`);

  }

  onMouseMove(e) {
    if (this.isMouseDown) {
      this.delta = (e.clientX - window.innerWidth / 2) * 0.5;
      this.handle.style.left = e.clientX + this.delta + 'px';
      this.topLayer.style.width = e.clientX + this.skew + this.delta + 'px';
    }
     return false;
  }

  onMouseUp(e) {
    this.isMouseDown = false;
    return false;
  }

  onMouseDown(e) {
    this.isMouseDown = true;
    this.delta = (e.clientX - window.innerWidth / 2) * 0.5;
    this.handle.style.left = e.clientX + this.delta + 'px';
    this.topLayer.style.width = e.clientX + this.skew + this.delta + 'px';

    return false;
  }

}
