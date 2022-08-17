import { Component, OnInit } from '@angular/core';
import {loadStripe, Stripe} from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  private stripe:Stripe;

  constructor() { }

  async ngOnInit(){
    // this.stripe = await loadStripe('pk_test_51LL7MlSByNvXBH1HRKXXnd44L2ipgG5zs5H2faIwzAHNyODu8SAZyLGIaxMLCSQduX2IVB8T5TCyRGGMi93zTmHM001Oqsvfh9');
    // console.log(this.stripe);
  }

}
