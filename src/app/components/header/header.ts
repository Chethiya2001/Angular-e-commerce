import { Component, inject, signal } from '@angular/core';
import { MainButton } from "../main-button/main-button";
import { CartService } from '../../service/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MainButton,RouterLink],
  template: `
    <div class="bg-slate-100  px-4 py-3 pl-5 pr-5 shadow-md flex justify-between items-center">
      <button class="text-2xl cursor-pointer" routerLink="/">My Store</button>
      <app-main-button
      [label]="'Cart('+cartService.cart().length+')'"
      routerLink="/cart"
      />
    </div>
  `,
})
export class Header {


showBtnClicked(){
  console.log("Clicked..");
}

cartService = inject(CartService);
}
