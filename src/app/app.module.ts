import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
import { ConsertosComponent } from './components/consertos/consertos.component';
import { ChamadosComponent } from './components/chamados/chamados.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CadastrarComponent,
    ConsertosComponent,
    ChamadosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
