import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'app/services/api.service';
import { CartApiService } from 'app/services/cart-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  productList: any;
  
  constructor(private modalService: NgbModal, private api:ApiService, private cartApi:CartApiService) {
  }
  ngOnInit(): void {
    this.productList=this.api.getProduct();
      this.productList.map((a:any)=> {
        Object.assign(a,{quantity:1,total:a.price})
      });
  }

  openConfirmModal(confirm:any){
    this.modalService.open(confirm,{size:'xs'});
  }
  addToCart(item:any){
    this.cartApi.addToCart(item);
  }
  
  openLg(content:any) {
    this.modalService.open(content, {size:'lg'});
  }
  

}
