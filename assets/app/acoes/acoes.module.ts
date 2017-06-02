

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AcoesComponent } from './acoes.component';
import { AcoesListComponent } from './acoes-list/acoes-list.component';
import { AcoesDetailComponent } from './acoes-detail/acoes-detail.component';
import { AcoesItemComponent } from './acoes-list/acoes-item/acoes-item.component';
import { AcoesPaginainicialComponent } from './acoes-paginainicial/acoes-paginainicial.component';
import { AcoesEditComponent } from './acoes-edit/acoes-edit.component';
import { AcoesRoutingModule } from './acoes-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        AcoesComponent,
        AcoesListComponent,
        AcoesDetailComponent,
        AcoesItemComponent,
        AcoesPaginainicialComponent,
        AcoesEditComponent
    ],
    imports: [
        CommonModule,
        AcoesRoutingModule,
        ReactiveFormsModule,
        SharedModule],        
    exports: [[],],
    providers: [],
    bootstrap: []
})
export class AcoesModule { }
