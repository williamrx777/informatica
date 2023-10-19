import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';

import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ConsertosComponent } from './components/consertos/consertos.component';
import { ChamadosComponent } from './components/chamados/chamados.component';


const routes: Routes = [
  {
    path:'',
    component:ProdutosComponent,
  },
  {
    path:'cadastrar',
    component:CadastrarComponent
  },
  {
    path:'consertos',
    component:ConsertosComponent
  },
  {
    path:'chamados',
    component:ChamadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
