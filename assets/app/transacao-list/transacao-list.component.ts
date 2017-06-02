import { Component, OnInit, OnDestroy } from '@angular/core';
import {Transacao} from '../shared/transacao.model';
import { TransacaoListService} from './transacao-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'inv-transacao-list',
  templateUrl: './transacao-list.component.html',
  styleUrls: ['./transacao-list.component.css']
})
export class TransacaoListComponent implements OnInit, OnDestroy {
   transacoes:Transacao[];
   private subscription:Subscription;
   constructor(private transacaoList:TransacaoListService) { }

  ngOnInit() {
    this.transacoes = this.transacaoList.getTransacoes();
    this.subscription = this.transacaoList.transacaoAlterada.subscribe(
      (transacoes:Transacao[]) => {
        this.transacoes = transacoes;
      }
    )    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditTransacao(index:number){
    this.transacaoList.startEditing.next(index);

  }

}
