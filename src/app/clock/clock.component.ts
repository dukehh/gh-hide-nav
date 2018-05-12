import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';

declare var setColor: any;
declare var setCountDown: any;
declare var jsClock: any;

@Component({
  selector: 'gh-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements AfterViewInit, OnDestroy {
  private alarmState = {
    INIT: Symbol('INIT'),
    PRESTART: Symbol('PRESTART'),
    OFF: Symbol('OFF'),
    START: Symbol('START'),
    RESET: Symbol('RESET')
  };

  private isAlarm = this.alarmState.INIT;
  private audio: any;
  private id: any;
  private duration = 60;

  constructor() {
  }

  ngAfterViewInit() {
    setColor('Lime');
    setCountDown('');
    jsClock();

    this.onSwitchAlarm();
  }

  setAlarmTime(t: any) {
    this.duration = t;
    if (this.isAlarm === this.alarmState.OFF) {
      this.isAlarm = this.alarmState.START;
    }
    this.onSwitchAlarm();
  }

  setAudio(): void {
    this.audio = new Audio('../assets/audio/move_01.mp3');
    this.audio.load();
    this.audio.currentTime = 0;
    this.audio.loop = true;
    this.audio.volume = 0.1;
  }

  onSwitchAlarm() {
    switch (this.isAlarm) {
      case this.alarmState.INIT:
        this.setAudio();
        this.isAlarm = this.alarmState.START;
        break;
      case this.alarmState.OFF:
        this.alarmOFF();
        break;
      case this.alarmState.START:
        this.alarmSTART();
        break;
      case this.alarmState.RESET:
        this.alarmOFF();
        this.setAudio();
        this.alarmSTART();
        this.isAlarm = this.alarmState.OFF;
        break;
      default:
        this.alarmOFF();
        this.isAlarm = this.alarmState.START;
    }
  }

  alarmSTART() {
    setColor('Yellow');
    this.isAlarm = this.alarmState.OFF;

    const to = moment().add(this.duration, 'minutes');
    setCountDown(this.duration);

    this.id = setInterval(() => {
      const now = moment();
      const diff = Math.abs(Math.floor(now.diff(moment(to)) / 60000));
      setCountDown(diff);
      if (to.isSame(now, 'minute')) {
        this.isAlarm = this.alarmState.RESET;
        setCountDown(0);
        this.moveAlarm();
      }
    }, 10000);
  }

  moveAlarm() {
    setColor('Red');
    clearInterval(this.id);
    this.audio.play().then(function () {
      // Automatic playback started!
    }).catch(function (error) {
      alert(`moveAlarm - audio.play: ${error}`);
    });

  }

  alarmOFF() {
    clearInterval(this.id);
    setColor('Lime');
    setCountDown('');
    this.audio.pause();
    this.audio.src = '';
    this.isAlarm = this.alarmState.START;
  }

  onRightClick(event: any) {

    const min = prompt('Input move-Time\nStandard 60 mins.');
    if (Number.parseInt(min)) {
      this.setAlarmTime(Number.parseInt(min));
    } else {
      this.setAlarmTime(60);
    }

    return false;

  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}


