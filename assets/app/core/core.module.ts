import { NgModule } from '@angular/core';

import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { AcoesService } from './../acoes/acoes.service';
import { TransacaoListService } from './../transacao-list/transacao-list.service';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
    declarations: [
        HeaderComponent, 
        HomeComponent],
    imports: [
        SharedModule, 
        AppRoutingModule],
    exports: [
        AppRoutingModule, 
        HeaderComponent],
    providers: [
        TransacaoListService,
        AcoesService,
        DataStorageService,
        AuthService],
})
export class CoreModule {

}