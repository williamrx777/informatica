import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit{
  dados: any = {};
  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.post('http://localhost:8080/produtos', this.dados).subscribe((data:any) => {
      this.dados = data;
    })
  }




}
