import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { ComputoresComponent } from './components/computores/computores.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

const routes: Routes = [
  {
    path:'',
    component:ProdutosComponent,
  },
  {
    path:'notebooks',
    component:NotebookComponent,
  },
  {
    path:'computadores',
    component:ComputoresComponent
  },
  {
    path:'cadastrar',
    component:CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
