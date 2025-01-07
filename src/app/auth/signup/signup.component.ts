import { Component, inject, OnInit } from '@angular/core';
import { SignUpData } from '../../../models/user.model';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../../components/logo/logo.component';
import { emailValidator } from '../../directives/email-validator.directive';
import { IonToast } from '@ionic/angular/standalone';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IonToast,
    LogoComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  singUpForm!: FormGroup;
  showWarning: boolean = false;
  warningMessage: string = '';
  signUpData: SignUpData = {
    name: '',
    email: '',
    password: '',
  };

  constructor() {}
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    this.singUpForm = new FormGroup({
      name: new FormControl(this.signUpData.name, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(this.signUpData.email, [
        Validators.required,
        Validators.minLength(5),
        emailValidator(),
      ]),
      password: new FormControl(this.signUpData.password, [
        Validators.required,
        Validators.minLength(5),
      ]),
      confirmPassword: new FormControl(this.signUpData.password, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  signUp(data: SignUpData) {
    // this.user.changeData(data);
    if (this.singUpForm.invalid) {
      console.log('error', this.singUpForm);
      for (const control of Object.keys(this.singUpForm.controls)) {
        this.singUpForm.controls[control].markAsTouched();
      }
      this.warningMessage = 'Please fill the missing fields';
      this.toggleWarning(true);
      return;
    }
    console.log('no error');
    this.signUpData = this.singUpForm.value;
    this.authService.signUp(this.signUpData).subscribe((res) => {
      if (res.success) {
        this.toggleWarning(true);
        this.warningMessage = 'Signup success';
        this.router.navigate(['/login']);
      }
    });
  }

  toggleWarning(show: boolean) {
    this.showWarning = show;
  }
}
