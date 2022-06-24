import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'app/services/cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any =[];
  totalAmount:any =0;
  constructor(private cartApi:CartApiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe((res)=>{
      this.cartItems=res;
      this.totalAmount = this.cartApi.getTotalAmount();
    })
  }
  redQuantity(item:any){
    this.cartApi.redQuantity(item);
  }
  incQuantity(item:any){
    this.cartApi.incQuantity(item);
  }
  removeProduct(item:any){
    console.log(item);
    this.cartApi.removeCartData(item);
  }

  removeAllProduct(){
    this.cartApi.removeAllCart();
  }
}
