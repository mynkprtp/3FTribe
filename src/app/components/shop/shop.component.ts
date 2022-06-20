import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'app/model/product.model';
import { ApiService } from 'app/services/api.service';
import { CartApiService } from 'app/services/cart-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: Product[] =[];
  
  constructor(private modalService: NgbModal, private api:ApiService, private cartApi:CartApiService) {
  }
  
  addToCart(item:Product){
    this.cartApi.addToCart(item);
  }
  
  openLg(content:any) {
    this.modalService.open(content, {size:'xl'});
  }
  
  ngOnInit(): void {
    this.products = this.api.getProduct();
  }

}
