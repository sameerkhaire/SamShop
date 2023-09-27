import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../Model/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  suggestedproducts:SuggestedProduct[]=[
    {
      banerimage:'Baner/Baner_Mobile.png',
      category:{
        id:0,
        category:'electronics',
        subcategory:'Mobiles'
      }
    },{
      banerimage:'Baner/Baner_Laptop.png',
      category:{
        id:1,
        category:'electronics',
        subcategory:'Laptops'
      }
    },{
      banerimage:'Baner/Baner_Chair.png',
      category:{
        id:2,
        category:'furnature',
        subcategory:'Chairs'
      }
    }
  ]
  ngOnInit(): void {
  }
  constructor() {
  }

}
