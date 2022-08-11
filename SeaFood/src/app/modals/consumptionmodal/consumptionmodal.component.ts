import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/purchases/purchases.component';

@Component({
  selector: 'app-consumptionmodal',
  templateUrl: './consumptionmodal.component.html',
  styleUrls: ['./consumptionmodal.component.scss']
})
export class ConsumptionmodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConsumptionmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
