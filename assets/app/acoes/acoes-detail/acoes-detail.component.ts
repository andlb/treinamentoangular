import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Acoes} from '../acoes.model';
import {AcoesService} from '../acoes.service';

@Component({
  selector: 'inv-acoes-detail',
  templateUrl: './acoes-detail.component.html',
  styleUrls: ['./acoes-detail.component.css']
})
export class AcoesDetailComponent implements OnInit {
  acao:Acoes;
  id: number;
  constructor(private acaoService:AcoesService,
            private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
          this.id = +param['id'];
          this.acao = this.acaoService.getAcao(this.id);
      }
    )
  }
  
  onAddToTransacaoList(){    
    this.acaoService.addTransacoesToAcoes(this.acao.transacoes)
  }

  onEditAcao(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteAcao(){
    this.acaoService.deleteAcao(this.id);
    this.router.navigate(['/acoes'],{relativeTo:this.route});
  }

}
