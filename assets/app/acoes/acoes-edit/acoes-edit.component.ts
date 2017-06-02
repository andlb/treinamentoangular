import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, Params} from '@angular/router';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import {AcoesService} from '../acoes.service';
import {Acoes} from '../acoes.model';

@Component({
  selector: 'inv-acoes-edit',
  templateUrl: './acoes-edit.component.html',
  styleUrls: ['./acoes-edit.component.css']
})
export class AcoesEditComponent implements OnInit {
  id:number;
  editMode = false;
  acaoForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
  private acaoService: AcoesService,
  private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;        
        this.initForm();
      }
    );
  }
  private initForm(){    
    let acaoNome = '';
    let acaoacao = ''
    let imageURL = ''
    let transacoesForm = new FormArray([]);
    if (this.editMode) {
      const acaoModel = this.acaoService.getAcao(this.id);
      acaoNome = acaoModel.nome;
      acaoacao = acaoModel.acao
      imageURL = acaoModel.logoempresa;
      if (acaoModel['transacoes']) {
          for (let transacao of acaoModel.transacoes) {
            transacoesForm.push(new FormGroup({
              'quantidade':new FormControl(transacao.quantidade,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'valor':new FormControl(transacao.valor,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'despesa':new FormControl(transacao.despesa,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])

            }))
          }
      }
    
    }
    this.acaoForm = new FormGroup({
        'acao': new FormControl(acaoacao,Validators.required),
        'nome': new FormControl(acaoNome,Validators.required),
        'imagePath': new FormControl(imageURL),
        'transacoes': transacoesForm
    });
  }

  onSubmit(){
    const newAcao = new Acoes(
      this.acaoForm.value['acao'],
      this.acaoForm.value['nome'],
      this.acaoForm.value['imagePath'],
      this.acaoForm.value['transacoes']
    );

    if (this.editMode) {
      this.acaoService.updataAcao(this.id,newAcao);
    }else{
      this.acaoService.addAcao(newAcao);
    }
    this.onCancel();
  }
  onAddTransacao(){
    (<FormArray>this.acaoForm.get('transacoes')).push(
      new FormGroup({
          'quantidade':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
          'valor':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
          'despesa':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  onDeleteTransacao(index:number) {
    (<FormArray>this.acaoForm.get('transacoes')).removeAt(index);

  }
  getControls(){
    return (<FormArray>this.acaoForm.get('transacoes')).controls;
  }
}
