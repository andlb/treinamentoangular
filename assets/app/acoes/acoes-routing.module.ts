
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcoesComponent } from './acoes.component';
import { AcoesPaginainicialComponent } from './acoes-paginainicial/acoes-paginainicial.component';
import { AcoesDetailComponent } from './acoes-detail/acoes-detail.component';
import { AcoesEditComponent } from './acoes-edit/acoes-edit.component';
import { AuthGuard } from './../auth/auth-guard.service';

const acoesRoute: Routes = [
    {
        path: '', component: AcoesComponent, children: [
            { path: '', component: AcoesPaginainicialComponent },
            { path: 'new', component: AcoesEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: AcoesDetailComponent },
            { path: ':id/edit', component: AcoesEditComponent, canActivate: [AuthGuard] },
        ]
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(acoesRoute)
    ],
    exports: [
        RouterModule
    ],providers: [
        AuthGuard
    ]
}
)
export class AcoesRoutingModule {

}