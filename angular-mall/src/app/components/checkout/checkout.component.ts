import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICartProduct } from 'src/app/dto/ICartProduct';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }

  checkoutProducts: ICartProduct[] = [];

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe((t) => this.checkoutProducts.push(...t));
  }

}
