import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  imageIndex:number=1;
// @HostBinding('style.color') textColor: any;
// @HostListener('click') Onclick(){
//   this.textColor='blue';
// }
// @HostListener('mouseover') onMouseOver(){
//   this.textColor='orange';
// }
// @HostListener('mouseout') onMouseOut(){
//   this.textColor='green'
// }
ngOnInit(): void {
// this.textColor='red';
}
}
