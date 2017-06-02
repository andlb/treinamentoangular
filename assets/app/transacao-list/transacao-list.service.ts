import {Transacao} from '../shared/transacao.model';
import {Subject} from 'rxjs/Subject';

export class TransacaoListService {
   transacaoAlterada= new Subject<Transacao[]>();
   startEditing = new Subject<number>();
   private transacoes:Transacao[]=[
    new Transacao('PETR4',10,"2017-04-16",150,10),
    new Transacao('SAPR4',10,"2017-04-16",150,10)    
   ]  
    getTransacoes() {
        return this.transacoes.slice();
    }
    getTransacao(index:number) {
        return this.transacoes[index];
    }

    adicionarTransacao(transacao:Transacao) {
        this.transacoes.push(transacao)
        this.transacaoAlterada.next(this.transacoes.slice())
    }
    addListaTransacoes(listaTransacoes:Transacao[]) {
        this.transacoes.push(...listaTransacoes);
        this.transacaoAlterada.next(this.transacoes.slice());
    }

    atualizaTransacao(index:number,novaTransacao:Transacao) {
        this.transacoes[index] = novaTransacao;
        this.transacaoAlterada.next(this.transacoes.slice());
    }
    
    deletarTransacao(index:number) {
        this.transacoes.splice(index,1);
        this.transacaoAlterada.next(this.transacoes.slice());
    }

    
}