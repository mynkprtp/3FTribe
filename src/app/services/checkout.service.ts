import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }
  
  // makePayment(stripeToken: any): Observable<any>{
  //   const url = "http://localhost:4200/checkout/"

  //   return this.http.post<any>(url,{token:stripeToken})
  // }
  makeFinalPayment(body:any):Observable<any>{
    const url="http://localhost:3000/create-checkout-session";
    const headers={'content-type':'application/json'};
    return this.http.post<any>(url,body,{'headers':headers});
  }
}