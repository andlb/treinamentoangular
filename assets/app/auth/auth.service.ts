'user strict'
import { Http, Headers, Response } from '@angular/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { User } from './user.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { myConst } from '../global/config';

@Injectable()
export class AuthService {
    //token: string = null;
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private router:Router,
                private http:Http){
    }
    signupUser(user: User) {   
        const body = JSON.stringify(user);        
        return this.http.post(myConst.url+'/userStore', body, {headers: this.headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    signinUser(user: User) {
        const body = JSON.stringify(user);        
        return this.http.post(myConst.url+'/userStore/signin', body, {headers: this.headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));


        /*
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken().then(
                    (token: string) => this.token = token
                )

            }
            )
            .catch(
            erro => console.log(erro)
            );
            */
    }
    logout(){
        localStorage.clear();
    }

    getToken() {
        return localStorage.getItem('token');
        /*firebase.auth().currentUser.getToken().then(
            (token: string) => this.token = token
        )*/
        //return this.token;
    }

    isAuthenticated(){    
        return (this.getToken() !== null);
        
    }
}