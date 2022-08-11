import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/purchases/purchases.component';

@Component({
  selector: 'app-addproductmodal',
  templateUrl: './addproductmodal.component.html',
  styleUrls: ['./addproductmodal.component.scss']
})
export class AddproductmodalComponent implements OnInit {

  imagePath:string="assets/seafood.jpg"
  constructor(public dialogRef: MatDialogRef<AddproductmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
