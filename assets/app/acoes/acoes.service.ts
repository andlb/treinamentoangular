import {Injectable} from '@angular/core';
import {Acoes} from './acoes.model';
import {Transacao} from '../shared/transacao.model';
import {TransacaoListService} from '../transacao-list/transacao-list.service'
import {Subject} from 'rxjs/Subject';
@Injectable()
export class AcoesService {
 acaoChanged = new Subject<Acoes[]>();
 private acoes:Acoes[]=[
    new Acoes("PETR4",
    "Petrobras",
    "https://lh5.googleusercontent.com/-iLOCRJxhg7E/AAAAAAAAAAI/AAAAAAAAAIM/KUqEv7xeX1I/s0-c-k-no-ns/photo.jpg",
    [
      new Transacao('PETR4',10,"2017-04-16",150,10),
      new Transacao('PETR4',10,"2017-04-16",150,10) 
    ]),
    new Acoes("SAPR",
    "Sanepar",
    "http://www.braziljournal.com/arquivos/postagens/NYNCPC8R4FM7WLBX39NLNAJN.png",[
      new Transacao('SAPR4',10,"2017-04-16",150,10),
      new Transacao('SAPR4',10,"2017-04-16",150,10) 
    ]),
  ];
  constructor(private transacaoListService:TransacaoListService) {

  }
  getAcoes() {
    return this.acoes.slice();
  }
  
  getAcao(index:number){
    return this.acoes[index];
  }

  addTransacoesToAcoes(transacoes:Transacao[]) {      
      this.transacaoListService.addListaTransacoes(transacoes);
  }

  addAcao(acao:Acoes) {
    this.acoes.push(acao);
    this.acaoChanged.next(this.acoes.slice());
  }
  setAcoes( acoes:Acoes[]){
    this.acoes = acoes;
    this.acaoChanged.next(this.acoes.slice());
  }

  updataAcao(index:number,newAcao:Acoes) {
    this.acoes[index] = newAcao;
    this.acaoChanged.next(this.acoes.slice());
  }

  deleteAcao(index:number){
    this.acoes.splice(index,1);
    this.acaoChanged.next(this.acoes.slice());
  }


} 