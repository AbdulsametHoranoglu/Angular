import { Component } from '@angular/core';
import { Product } from '../../models/Product';




@Component({
  selector: 'app-product',
  standalone: true, 
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products:Product[ ]=[ ];
  constructor() {}

  ngOnInit(): void {} 

}
