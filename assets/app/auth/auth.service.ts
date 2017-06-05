'user strict'
import { Http, Headers, Response } from '@angular/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { User } from './user.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { myUrlConst } from '../global/config';

@Injectable()
export class AuthService {
    //token: string = null;
    constructor(private router:Router,
                private http:Http){

    }

    signupUser(user: User) {   
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(myUrlConst.url+'/userStore', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    signinUser(email: string, password: string) {



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
        //firebase.auth().signOut();
        this.token=null;
    }

    getToken() {
        /*firebase.auth().currentUser.getToken().then(
            (token: string) => this.token = token
        )*/
        //return this.token;
    }

    isAuthenticated(){        
        //return this.token != null;
    }
}