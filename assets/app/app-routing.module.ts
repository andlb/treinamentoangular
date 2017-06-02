import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';

import { TransacaoListComponent } from './transacao-list/transacao-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'acoes', loadChildren: './acoes/acoes.module#AcoesModule', canLoad: [AuthGuard] },
    { path: 'transacao-list', component: TransacaoListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [
        RouterModule
    ],providers: [
        AuthGuard
    ]
})
export class AppRoutingModule { }