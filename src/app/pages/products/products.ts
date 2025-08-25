import { Component, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from "./product-card/product-card";

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  template: `
    <div class="grid p-8 grid-cols-3 gap-4">
      @for (item of products(); track item.id) {
        <app-product-card [product]="item" />
      }
    </div>
  `,
})
export class Products {
  products = signal<Product[]>([

  ]);

  async ngOnInit() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    this.products.set(data);
  }


}
