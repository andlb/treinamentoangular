
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { AcoesService } from '../acoes/acoes.service';
import {Acoes} from '../acoes/acoes.model';
import {AuthService} from '../auth/auth.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private acaoService: AcoesService,
        private authService: AuthService) {

    }

    storeAcoes() {
        const token = this.authService.getToken();        
        return this.http.put('https://bolsavalores-1708d.firebaseio.com/acoes.json?auth='+token, this.acaoService.getAcoes())
    }
    getAcoes(){
        const token = this.authService.getToken();
        this.http.get('https://bolsavalores-1708d.firebaseio.com/acoes.json?auth='+token)
        .map(
            (response:Response) => {
                const acoes:Acoes[] = response.json();
                for (let tAcao of acoes)    {
                    if (!tAcao['transacoes']){
                        tAcao['transacoes'] = [];
                    }
                }
                return acoes
            } 
        )            
        .subscribe(         
            (acoes:Acoes[]) => {                
                this.acaoService.setAcoes(acoes);
            }
        ) ;
    }
}
/*
        .map(

            )  
*/
