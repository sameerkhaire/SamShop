import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class CartService{
    cartItemlist:any=[];

    productlist=new BehaviorSubject<any>([]);
    constructor(private http:HttpClient) {
    }
    getProduct(){
      return this.productlist.asObservable();
    }
    addToCart(product:any)
    {
      this.cartItemlist.push(product);
      this.productlist.next(this.cartItemlist);
      this.TotalPrice();
      console.log(this.cartItemlist);
    }
    TotalPrice():number {
        let grandTotal:number=0;
      this.cartItemlist.map((a:any)=>{
        grandTotal = parseFloat(grandTotal + a.totalprice);
        console.log(a.price);
        console.log(typeof(a.price));

      })
      return grandTotal;
    }
    removeCartItem(product:any){
       this.cartItemlist.map((a:any,index)=>{
        if(product.id==a.id){
            this.cartItemlist.splice(index,1);
        }
        this.productlist.next(this.cartItemlist);
       })
    }
    removeAllCart(){
        this.cartItemlist=[];
        this.productlist.next(this.cartItemlist);
    }

}
