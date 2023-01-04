import { Component, EventEmitter, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { User } from 'src/app/User';

import { SignupService } from 'src/app/services/signup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  form: any = {
    username: null,
    name: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: SignupService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const username = this.form.username;
    const name = this.form.name;
    const password = this.form.password;
    console.log({
      username,
      name,
      password
    });
    this.authService.register(username, name, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
      }
    });
  }
}
