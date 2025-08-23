import { Component, signal } from '@angular/core';
import { MainButton } from "../main-button/main-button";

@Component({
  selector: 'app-header',
  imports: [MainButton],
  template: `
    <div class="bg-slate-100  px-4 py-3 pl-5 pr-5 shadow-md flex justify-between items-center">
      <button class="text-2xl" >My Store</button>
      <app-main-button [label]="cart()" (btnClicked)="showBtnClicked()"/>
    </div>
  `,
})
export class Header {
cart = signal("Cart");

showBtnClicked(){
  console.log("Clicked..");
}
}
