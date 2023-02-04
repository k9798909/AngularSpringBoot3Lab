import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MallComponent } from './components/mall/mall.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'product', component: MallComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
