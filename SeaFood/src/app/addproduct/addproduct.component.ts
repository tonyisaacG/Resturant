import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddproductmodalComponent } from '../modals/addproductmodal/addproductmodal.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  dialogRef: MatDialogRef <any> ;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialogRef = this.dialog.open(AddproductmodalComponent, {
      width: '70%',
      height:'55%',
      // data: { date: this.date,item:this.item,quantity:this.quantity,price:this.price},
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.total = result;
    });
  }

  ngOnInit(): void {
  }

}
