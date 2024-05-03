import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { productResponseModel } from '../../models/productResponseModel';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products:Product[ ]=[ ];
  apiUrl = "https://localhost:7087/api/products/getall"

  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.httpClient.get<productResponseModel>(this.apiUrl)
    .subscribe((response) => {
      this.products= response.data
    });
  } 

}
