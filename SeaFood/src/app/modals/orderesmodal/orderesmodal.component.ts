import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/purchases/purchases.component';

@Component({
  selector: 'app-orderesmodal',
  templateUrl: './orderesmodal.component.html',
  styleUrls: ['./orderesmodal.component.scss']
})
export class OrderesmodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrderesmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
