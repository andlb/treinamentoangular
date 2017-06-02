import {Transacao} from '../shared/transacao.model';
export class Acoes {
    public acao:string;
    public nome:string;
    public logoempresa:string;
    public transacoes:Transacao[];
    constructor(acao:string,nome:string,logoempresa:string,transacoes:Transacao[]){
        this.acao=acao;
        this.nome = nome;
        this.logoempresa=logoempresa;
        this.transacoes = transacoes;
    }

}