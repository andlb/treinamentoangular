import { Router } from '@angular/router';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'inv-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService,
   private router: Router) { }

  ngOnInit() {
    
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, Validators.required)
    });    
  }

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.authService.signinUser(user).subscribe(
      data => { 
        localStorage.setItem('token',data.token);
        localStorage.setItem('userId',data.userId);
        this.router.navigateByUrl('/');
      },
      error => console.error(error)
    );
    this.myForm.reset();
  }
}
