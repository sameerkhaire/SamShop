import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../Model/Category';
import { CartComponent } from '../cart/cart.component';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  navigationList:NavigationItem[]=[
{
  category:"electronics",
  subcategories:["mobiles","laptops"]
},{
  category:"furniture",
  subcategories:["chair","table"]
}
  ]
  totalitem:number=0;
constructor(private cart: CartService) { 
  }
  ngOnInit(): void {
   this.cart.getProduct().subscribe(x=>{
    this.totalitem=x.length;
   })
  }

}
