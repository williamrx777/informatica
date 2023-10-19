import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  produtos: any[] = [];
  constructor(private http:HttpClient) {

   }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/produtos').subscribe((data: any) => {
      this.produtos = data;
    });

  }


}
