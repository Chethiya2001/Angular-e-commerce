import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Products } from "./pages/products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Products],
  template:`
  <app-header/>
<app-products/>
  `,
})
export class App {
  protected readonly title = signal('e-commerce-angular');
}
