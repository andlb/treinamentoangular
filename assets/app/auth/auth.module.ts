import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations:[
        SignupComponent,
        SigninComponent    
    ],
    imports:[FormsModule,ReactiveFormsModule,AuthRoutingModule]
})
export class AuthModule {

}