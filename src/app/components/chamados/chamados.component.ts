import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent{
  dados:any = {};
  constructor(private http:HttpClient) {

  }

  abrirChamado(): void {
    this.http.post('http://localhost:8080/consertos', this.dados).subscribe((data:any) => {
      this.dados = data;
    });
  }

}
