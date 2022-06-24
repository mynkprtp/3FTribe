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
    collapsed=true;
    
    ngOnInit(){
      this.cartApi.getProductData().subscribe((res)=>{
        let count=0;
        res.map((item:any)=>{
          count+=item.quantity;
          console.log(item);
        })
        this.totalItems=count;
      })
      console.log(this.totalItems);
    }

}
