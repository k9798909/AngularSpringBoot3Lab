import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/dto/IProduct';
import { ICartProduct } from 'src/app/dto/ICartProduct';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mall-card',
  templateUrl: './mall-card.component.html',
  styleUrls: ['./mall-card.component.scss'],
})
export class MallCardComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() cartProduct?: ICartProduct[];
  @Output() getCartProduct = new EventEmitter<ICartProduct[]>();


  constructor(private cartService: CartService,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  handlerAddCart = (): void => {
    const product = Object.create(this.product);
    const addCartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    let sameProduct: ICartProduct | null = this.cartProduct?.find((p) => p.id === product.id) ?? null;
    if (sameProduct) {
      sameProduct.quantity = sameProduct.quantity + 1;
    } else {
      this.cartProduct?.push(addCartProduct);
    }

    this.cartService.add(addCartProduct).subscribe(res => {
      console.log(res)
      if (res.isAdd) {
        this._snackBar.open('新增購物車成功!!','', {
          duration: 1000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    });

    this.getCartProduct.emit(this.cartProduct);
  };
}
