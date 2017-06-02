export class Transacao {
    public acao:string;
    public quantidade:number;
    public data:string;
    public valor:number;
    public despesa:number;
    constructor(
        acao:string, 
        quantidade:number,
        data:string,
        valor:number,
        despesa:number){
            this.acao=acao;
            this.quantidade = quantidade;
            this.data = data;
            this.valor = valor;
            this.despesa = despesa;
        }

}