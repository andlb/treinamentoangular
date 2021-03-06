import { AuthService } from './auth/auth.service';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { transacaoListModule } from './transacao-list/transacao-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    BrowserModule,    
    HttpModule,
    AppRoutingModule,
    SharedModule,
    transacaoListModule,
    AuthModule,
    CoreModule
  ],
  providers:[AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
