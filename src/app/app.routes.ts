import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { CartPage } from './pages/cart/cart-page';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Products,
  },
  {
    path:'cart',
    component:CartPage
  }
];
