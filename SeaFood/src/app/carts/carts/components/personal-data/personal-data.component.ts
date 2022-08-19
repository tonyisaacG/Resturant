import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/BackEnd/Services/order.service';
import { SignalRService } from 'src/app/BackEnd/Services/signal-rservice.service';
import { IOrderDetails } from 'src/app/BackEnd/ViewModels/iorder-details';
import { IOrderModel } from 'src/app/BackEnd/ViewModels/iorder-model';
import { OrderStatus } from 'src/app/BackEnd/ViewModels/order-status.enum';
import { OrderType } from 'src/app/BackEnd/ViewModels/order-type.enum';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  @ViewChild("nameClient") inputName
  @ViewChild("phoneClient") inputphoneClient
  @ViewChild("addressClient") inputaddressClient

  cartProducts: any[] = [];

  showsuccess = false;
  showfaild = false;
  

  orderOnline :IOrderModel ={order_id:0,orderType:OrderType.Online,orderStatus:OrderStatus.Wait,
  addressClient:'',nameClient:'',phoneClient:'',totalPrice:0,orderDetailsModels:[]};

  constructor(private cartService:CartService,
              private orderServices:OrderService,
              private signalr:SignalRService) {}

  ngOnInit(): void {
   
  }


  sendOrder(){
    this.cartProducts = JSON.parse(localStorage.getItem('cart'));
    this.cartProducts.forEach(item=>{
      let priceQuantityMeal = item.item.product_price * item.quantity;
      this.orderOnline.totalPrice += priceQuantityMeal;
      let obj = new IOrderDetails(item.item.product_id,item.item.product_name,item.quantity,priceQuantityMeal,item.item.product_description)
      this.orderOnline.orderDetailsModels.push(obj);
    })
     this.signalr.broadcastParams(this.orderOnline);
      this.signalr.data.subscribe((data=>{
        this.showsuccess=true;
        this.showfaild = false;
        this.orderOnline.orderDetailsModels = []
      }),err=>{
        this.showsuccess = false;
        this.showfaild = true;
      })
  }

  
  detectChange(){
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    this.inputName.nativeElement.value = ' ';
    this.inputphoneClient.nativeElement.value = ' ';
    this.inputaddressClient.nativeElement.value = ' ';
  }
}
