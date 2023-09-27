import { HttpClient } from '@angular/common/http';
import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productList:any;
  @Input() view:'grid' | 'list' | 'currentitem' |'prevcartitem' ='grid';
  constructor(private api:ApiService,private cart:CartService) {
  }
  ngOnInit(): void {
    this.api.GetAllProduct().subscribe(x=>{
      this.productList=x;
    this.productList.forEach((res:any) => {
      Object.assign(res,{quantity:1,totalprice:1 * res.price});
      });
    })
  }
  addToCart(item:any){
   this.cart.addToCart(item);
  }


}
