import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConsumptionmodalComponent } from '../modals/consumptionmodal/consumptionmodal.component';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss']
})
export class ConsumptionComponent implements OnInit {
  dialogRef: MatDialogRef <any> ;
  constructor(public dialog: MatDialog) { }

 

  openDialog(): void {
    this.dialogRef = this.dialog.open(ConsumptionmodalComponent, {
      width: '50%',
      height:'80%',
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
