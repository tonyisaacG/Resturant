import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtParserService } from '../BackEnd/Global/jwt-parser.service';
import { AuthUserService } from '../BackEnd/Services/auth-user.service';
import { SignalRService } from '../BackEnd/Services/signal-rservice.service';
import { OrderdetailsmodalComponent } from '../modals/orderdetailsmodal/orderdetailsmodal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  dialogRef: MatDialogRef <any> ;

  constructor(public dialog: MatDialog,
              private auth:AuthUserService,private router:Router,
              private jwtParser:JwtParserService,
              private signalr:SignalRService){}


    //#region  properties
    username :string  = 'مستخدم غير معلوم';
<<<<<<< HEAD
    notification:string=`green`;
=======
    notification:string=`white`;
>>>>>>> 90e7b496661cc9ec01438c61b2621c70bc1e2fa9
    //#endregion

  
  openDialog(): void {
    this.dialogRef = this.dialog.open(OrderdetailsmodalComponent, {
      width: '60%',
      height:'90%',
      // data: { date: this.date,item:this.item,quantity:this.quantity,price:this.price},
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.total = result;
    });
  }
  ngOnInit(): void {
<<<<<<< HEAD

    this.jwtParser.setToken(localStorage.getItem("AuthUserToken"));
    this.jwtParser.decodeToken();
    this.username = this.jwtParser.getUsername();
=======
    this.jwtParser.setToken(localStorage.getItem("AuthUserToken"));
    this.jwtParser.decodeToken();
    this.username = this.jwtParser.getUsername();
    this.signalr.startConnection();
    this.signalr.data.subscribe(data=>{
      if(data!=null){
        this.notification=`red`;
      }
    })
>>>>>>> 90e7b496661cc9ec01438c61b2621c70bc1e2fa9
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


  

  logout(){
    this.auth.LogOut();
  }
}
