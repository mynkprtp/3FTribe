import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  cartDataList:any =[];
  productList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) {}
  
    getProductData(){
      if(localStorage.getItem('session')){
        this.cartDataList = localStorage.getItem('session');
        this.cartDataList = JSON.parse(this.cartDataList);
        this.productList.next(this.cartDataList);
      }
      return this.productList.asObservable();
    }

    setProduct(product:any){
      this.productList.next(product);
    }

    addToCart(product:any){
      let newItem:boolean=true;
      this.cartDataList.map((item:any)=>{
        if(item.id===product.id)
        {
          item.quantity++;
          item.total=item.quantity*item.price;
          newItem=false;
        }
      })
      if(newItem)
      this.cartDataList.push(product);
      this.productList.next(this.cartDataList);
      this.saveToLocalStorage(this.cartDataList);
      this.getTotalAmount();
      console.log(this.cartDataList);
    }

    saveToLocalStorage(res:any){
      localStorage.setItem('session',JSON.stringify(res));
    }

    getTotalAmount(){
      let grandTotal=0;
      this.cartDataList.map((a:any)=>{
        grandTotal+=a.total;
      })
      return grandTotal;
    }
    incQuantity(product:any){
      this.cartDataList.map((item:any)=>{
        if(item.id===product.id){
          item.quantity++;
          item.total+=item.price;
        }
      })
      this.productList.next(this.cartDataList);
      this.saveToLocalStorage(this.cartDataList);
    }
    redQuantity(product:any){
      this.cartDataList.map((item:any)=>{
        if(item.id===product.id){
          item.quantity--;
          item.total-=item.price;
        }
        if(item.quantity===0){
          this.cartDataList.map((a:any, index:any)=>{
            if(product.id===a.id){
              this.cartDataList.splice(index,1);
            }
          })
        }
      })
      this.productList.next(this.cartDataList);
      this.saveToLocalStorage(this.cartDataList);
    }
    removeCartData(product:any){
      this.cartDataList = this.cartDataList.filter((item:any)=>{
        return item.id!==product.id;
      })
      this.productList.next(this.cartDataList);
      this.saveToLocalStorage(this.cartDataList);
    }

    removeAllCart(){
      this.cartDataList=[];
      this.productList.next(this.cartDataList);
      this.saveToLocalStorage(this.cartDataList)
    }
}
