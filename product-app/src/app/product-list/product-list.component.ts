import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Product 1', price: 100, description: 'Description of Product 1' },
    { name: 'Product 2', price: 200, description: 'Description of Product 2' },
    { name: 'Product 3', price: 300, description: 'Description of Product 3' },
    { name: 'Product 4', price: 400, description: 'Description of Product 4' },
    { name: 'Product 5', price: 500, description: 'Description of Product 5' }
  ];

  selectedProduct: Product | null = null;
