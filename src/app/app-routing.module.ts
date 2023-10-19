import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';

import { CadastrarComponent } from './components/cadastrar/cadastrar.component';


const routes: Routes = [
  {
    path:'',
    component:ProdutosComponent,
  },
  {
    path:'cadastrar',
    component:CadastrarComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
