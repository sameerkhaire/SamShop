import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  selectedPaymentMethodName='a';
  selectedPaymentMethod= new FormControl('0');
  ngOnInit(): void {
   this.selectedPaymentMethod.valueChanges.subscribe((res:any)=>{
       if(res==='0'){
        this.selectedPaymentMethodName='';
       }
       else{
        this.selectedPaymentMethodName=res.toString();
       }
   });
  }

}
