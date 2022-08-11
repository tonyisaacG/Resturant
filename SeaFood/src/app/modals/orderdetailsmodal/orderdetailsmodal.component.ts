import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/purchases/purchases.component';

@Component({
  selector: 'app-orderdetailsmodal',
  templateUrl: './orderdetailsmodal.component.html',
  styleUrls: ['./orderdetailsmodal.component.scss']
})
export class OrderdetailsmodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrderdetailsmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
