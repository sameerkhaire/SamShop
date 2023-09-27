import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public products:any=[];
  public grandTotal:number=0;
  temp=1;
  constructor(private cart:CartService) {
  }
  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.products=res;

      this.grandTotal=this.cart.TotalPrice();
    })
  }
  removeItem(item:any){
    this.cart.removeCartItem(item);
  }
  emptyCartItem(){
    this.cart.removeAllCart();
  }
  increment(i:number) {

    this.products[i].quantity=this.products[i]?.quantity+1;
    this.products[i].totalprice=this.products[i].price * this.products[i].quantity;
    this.grandTotal=this.cart.TotalPrice();
  }

  decrement(i:number) {
    this.products[i].quantity=this.products[i]?.quantity-1;
    this.products[i].totalprice=this.products[i].price * this.products[i].quantity;
    this.grandTotal=this.cart.TotalPrice();
  }

}
