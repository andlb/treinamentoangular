import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TransacaoEditComponent } from './transacao-edit/transacao-edit.component';
import { TransacaoListComponent } from './transacao-list.component';

@NgModule({
    declarations: [
        TransacaoListComponent,
        TransacaoEditComponent],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class transacaoListModule {

}