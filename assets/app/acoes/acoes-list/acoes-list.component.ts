import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Acoes } from '../acoes.model';
import { AcoesService } from '../acoes.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'inv-acoes-list',
  templateUrl: './acoes-list.component.html',
  styleUrls: ['./acoes-list.component.css']
})
export class AcoesListComponent implements OnInit, OnDestroy {
  acaoSubscribe = new Subscription();

  acoes: Acoes[];
  constructor(private acoesService: AcoesService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.acaoSubscribe = this.acoesService.acaoChanged.subscribe(
      (acoes:Acoes[]) => {
        this.acoes = acoes;
      }
    )
    this.acoes = this.acoesService.getAcoes();
  }

  ngOnDestroy() {
    this.acaoSubscribe.unsubscribe();
  }
  onNewAcao() {
    this.router.navigate(['new'],{relativeTo:this.route});
  }


}
