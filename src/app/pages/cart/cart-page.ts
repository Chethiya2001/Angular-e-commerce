
import { Component, inject } from '@angular/core';
import { CartService } from '../../service/cart-service';
import { CartItem } from "./cart-item/cart-item";
import { Cartsummery } from "./cartsummery/cartsummery";


@Component({
  selector: 'app-cart-page',
  imports: [CartItem, Cartsummery],
  template: `

   <div class="p-6 flex flex-col gap-4">
    <h2>Shopping Cart</h2>
    @for (item of cartService.cart(); track item.id) {
      <app-cart-item [item]="item"/>
    }
    <app-cartsummery/>
   </div>
  `,
})
export class CartPage {
  cartService= inject(CartService)

}
