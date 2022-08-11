import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddModalComponent } from '../add-modal/add-modal.component';

export interface DialogData {
  date: string;
  item: string;
  quantity:number;
  price:number;
  total:number;
}

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})

export class PurchasesComponent implements OnInit {
  date: string;
  item: string;
  quantity:number;
  price:number;
  total:number;
  dialogRef: MatDialogRef <any> ;
  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }
  openDialog(): void {
   this.dialogRef = this.dialog.open(AddModalComponent, {
      width: '50%',
      height:'80%',
      data: { date: this.date,item:this.item,quantity:this.quantity,price:this.price},
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.total = result;
    });
  }
}

