import { Component ,Input} from '@angular/core';
import { Category } from '../Model/Category';

@Component({
  selector: 'app-suggested-product',
  templateUrl: './suggested-product.component.html',
  styleUrls: ['./suggested-product.component.css']
})
export class SuggestedProductComponent {
  @Input()
  category!: Category;
}
