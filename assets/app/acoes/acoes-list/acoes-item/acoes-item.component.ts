import { Component, OnInit,Input } from '@angular/core';
import {Acoes} from '../../acoes.model';


@Component({
  selector: 'inv-acoes-item',
  templateUrl: './acoes-item.component.html',
  styleUrls: ['./acoes-item.component.css']
})
export class AcoesItemComponent implements OnInit {
  @Input() acao: Acoes;
  @Input() index:number;  

  ngOnInit() {
  }

}
