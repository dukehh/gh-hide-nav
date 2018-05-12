import {AuthService} from '../../auth/auth.service';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'gh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  loginSucceeded: boolean;
  noSuccessMessage: String;
  @ViewChild('focusit') private elementRef: ElementRef;


  constructor(private fb: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.reset();
   }

  public ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

  onSubmit() {
    if (this.form.valid) {
      if (!(this.loginSucceeded = this.authService.login(this.form.value))) {
        this.noSuccessMessage = 'Not logged in! Try again.';
        this.reset();
      }
    }
    this.formSubmitAttempt = true;
  }

  reset() {
    this.form.setValue({
      username: localStorage.getItem('User'),
      password: ''
    });
  }
}

