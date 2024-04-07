import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  username: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  hide: boolean = true;
  loading: boolean = false;
  loginFail: boolean = false;

  @Input()
  diameter: number = 70;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  onLoginSuccess() {
    this.router.navigate(['/dashboard']);
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.loading = true;
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((loginSuccess) => {
        this.loading = false;
        if (loginSuccess) {
          this.onLoginSuccess();
          this.auth.authStatus = {
            isAuthenticated: true,
            username: this.loginForm.value.username,
          };
          localStorage.setItem(
            'authStatus',
            JSON.stringify(this.auth.authStatus)
          );
        } else {
          this.router.navigate(['/login']);
          this.loginFail = true;
        }
      });
    }
  }

  getErrorEmail() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return `This field must be at least 
      ${this.password.errors?.['minlength'].requiredLength} characters`;
  }
}
