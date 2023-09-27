import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
view:'grid'|'list'='list';
sortby:'default' |'htl'|'lth'='default';
}
