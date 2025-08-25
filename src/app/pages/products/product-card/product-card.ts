import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product';
import { MainButton } from "../../../components/main-button/main-button";
import { CartService } from '../../../service/cart-service';

@Component({
  selector: 'app-product-card',
  imports: [MainButton],
  template: `
   <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm"> {{ '$' + product().price }}</span>
        <app-main-button
          class="mt-3"
          label="Add to Cart"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>

      <span class="absolute top-2 right-3 text-sm font-bold"
      [class]="product().stock ? 'text-green-600':'text-red-400'"
      >
        @if (product().stock) {
          {{product().stock}} left
        }
        out of stock
      </span>


    </div>

  `,

})
export class ProductCard {
  product = input.required<Product>();
  cartService = inject(CartService)
}
