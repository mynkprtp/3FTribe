import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'app/services/cart-api.service';
import { CheckoutService } from 'app/services/checkout.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any =[];
  totalAmount:any =0;
  strikeCheckout:any =null;
  baseURL: string = "http://localhost:4200/";
  paymentHandler: any = null;
  success: boolean = false
  failure:boolean = false

  constructor(private cartApi:CartApiService, private http: HttpClient, private checkout:CheckoutService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe((res)=>{
      this.cartItems=res;
      this.totalAmount = this.cartApi.getTotalAmount();
    })
    // this.invokeStripe();
  }
  // Reduce quantity of item by 1
  redQuantity(item:any){
    this.cartApi.redQuantity(item);
  }
  // increase quantity of item by 1 
  incQuantity(item:any){
    this.cartApi.incQuantity(item);
  }
  // remove selected item
  removeProduct(item:any){
    console.log(item);
    this.cartApi.removeCartData(item);
  }
  // remove all items
  removeAllProduct(){
    this.cartApi.removeAllCart();
  }

  // FIRST ONE ----------------------------

  // checkoutCart(){
  //   const body= JSON.stringify({
  //     items: [
  //       { id: 1, quantity: 3 },
  //       { id: 2, quantity: 1 },
  //     ],
  //   });
  //   this.checkout.makeFinalPayment(body).subscribe(
  //     (res)=>{
  //       console.log(res);
  //     }
  //   )
  // }

  // ---------------CHECKOUT---------------------

  // makePayment(amount: number) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: environment.stripe_key,
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken);
  //       paymentstripe(stripeToken);
  //     },
  //   });
 
  //   const paymentstripe = (stripeToken: any) => {
  //     this.checkout.makePayment(stripeToken).subscribe((data: any) => {
  //       console.log(data);
  //       if (data.data === "success") {
  //         this.success = true
  //       }
  //       else {
  //         this.failure = true
  //       }
  //     });
  //   };
 
  //   paymentHandler.open({
  //     name: 'Coding Shiksha',
  //     description: 'This is a sample pdf file',
  //     amount: amount * 100,
  //   });
  // }
 
  // invokeStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://checkout.stripe.com/checkout.js';
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: environment.stripe_key,
  //         locale: 'auto',
  //         token: function (stripeToken: any) {
  //           console.log(stripeToken);
  //         },
  //       });
  //     };
 
  //     window.document.body.appendChild(script);
  //   }
  // }

}
