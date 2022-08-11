import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../purchases/purchases.component';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private http:HttpClient,) {

      this.http.post('',data).subscribe((result)=>{console.warn("result",result)
     })
     console.warn(data);
    }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
