import { Component, computed, inject } from '@angular/core';
import { MainButton } from "../../../components/main-button/main-button";
import { CartService } from '../../../service/cart-service';

@Component({
  selector: 'app-cartsummery',
  imports: [MainButton],
  template: `
  <div class="bg-slate-100 p-6 rounded-xl shadow-xl  border">
  <h2 class="text-2xl">Order Summary</h2>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <span class="text-lg">Total</span>
      <span class="text-lg font-bold">{{ '$ ' + total() }}</span>
    </div>
    <app-main-button label="Proceed to checkout" />
  </div>
</div>
  `,
  
})
export class Cartsummery {

  cartService = inject(CartService);
  total = computed(()=>{
    let total =0;
    for(const item of this.cartService.cart()){
      total += item.price;
    }
    return total;
  })

}
