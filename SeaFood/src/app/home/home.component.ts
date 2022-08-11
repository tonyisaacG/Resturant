import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderesmodalComponent } from '../modals/orderesmodal/orderesmodal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dialogRef: MatDialogRef <any> ;
  constructor(public dialog: MatDialog) { }

 

  openDialog(): void {
    this.dialogRef = this.dialog.open(OrderesmodalComponent, {
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
    this.dialogRef.updateSize('80%', '80%');
  }

}
