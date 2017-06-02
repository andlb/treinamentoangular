import { Component, ViewChild,OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Transacao} from '../../shared/transacao.model';
import { TransacaoListService} from '../transacao-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'inv-transacao-edit',
  templateUrl: './transacao-edit.component.html',
  styleUrls: ['./transacao-edit.component.css']
})
export class TransacaoEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editItemIndex:number;
  editTransacao:Transacao;
  @ViewChild('f') transacaoForm:NgForm;
  constructor(private transacaoListService : TransacaoListService) { }

  ngOnInit() {
    this.subscription = this.transacaoListService.startEditing.subscribe(
      (index:number) => {
          this.editMode=true;
          this.editItemIndex = index;
          this.editTransacao = this.transacaoListService.getTransacao(index);          
          this.transacaoForm.setValue({
            acao:this.editTransacao.acao,
            quantidade:this.editTransacao.quantidade,
            data:this.editTransacao.data,
            valor:this.editTransacao.valor,
            despesa:this.editTransacao.despesa
          });

      }
    );
  
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
  onSubmit(form:NgForm) {
    const formValue = form.value;
    const tAcao = formValue.acao;
    const tQuantidade = formValue.quantidade;
    const tData = formValue.data;
    const tValor = formValue.valor;
    const tDespesa = formValue.despesa;
    const newTransacao = new Transacao(tAcao,
    tQuantidade,tData,tValor,tDespesa);
    if (this.editMode) {
      this.transacaoListService.atualizaTransacao(this.editItemIndex,newTransacao);
    }else {
      this.transacaoListService.adicionarTransacao(newTransacao)
    }
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.transacaoForm.reset();
  }

  onDelete(){
    this.transacaoListService.deletarTransacao(this.editItemIndex);
    this.onClear();
  }

}
