import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/dto/IProduct';
import { ICartProduct } from 'src/app/dto/ICartProduct';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() cartProduct?: ICartProduct[];
  @Output() clearCart = new EventEmitter<ICartProduct[]>();

  constructor(private cartService: CartService,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  clearCard() {
    this.cartService.clear().subscribe(res => {
      if (res.isClear) {
        this._snackBar.open('已清空購物車!!','', {
          duration: 1000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.clearCart.emit([]);
      }
    })

  }
}
