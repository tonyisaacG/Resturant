import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthUserService } from '../BackEnd/Services/auth-user.service';
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
              private auth:AuthUserService,private router:Router){}

  
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
  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


  

  logout(){
    this.auth.LogOut();
  }
}
