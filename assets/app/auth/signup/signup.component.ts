import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'inv-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    const email = form.value.email;    
    const password = form.value.password;
    this.authService.signupUser(email,password);
    


  }
}