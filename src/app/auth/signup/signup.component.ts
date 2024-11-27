import { Component, OnInit } from '@angular/core';
import { SignUpData } from '../../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'home-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LogoComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpData: SignUpData = {
    name: '',
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit() {}

  signUp(data: SignUpData) {
    // this.user.changeData(data);
  }
}
