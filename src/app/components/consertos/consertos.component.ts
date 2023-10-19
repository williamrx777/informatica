import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consertos',
  templateUrl: './consertos.component.html',
  styleUrls: ['./consertos.component.css']
})
export class ConsertosComponent implements OnInit{
  consertos:any[] = [];
  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/consertos').subscribe((data:any)=> {
      this.consertos = data;
    });
  }

}
