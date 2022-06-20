import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CartApiService} from '../../../services/cart-api.service'

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css']
})
export class NewHeaderComponent implements OnInit {

  totalItems:number=0;
  constructor(private cartApi:CartApiService) { }

  ngOnInit(){
    this.cartApi.getProductData().subscribe((res)=>{
      this.totalItems = res.length;
    })
    console.log(this.totalItems);
  }

}
