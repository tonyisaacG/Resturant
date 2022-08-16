import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  UserRegForm : FormGroup

  isOpen:Boolean = false
  ToggleSingnInAndSignUp(){
    this.isOpen = !this.isOpen

    console.log(this.isOpen)
  }

  constructor(private fb:FormBuilder) { 
    this.UserRegForm =fb.group({
      userNameSignIn: ['',[Validators.required, Validators.pattern('[A-Za-z]{3,}')]]
      
    })
  }ngOnInit(): void {
  
  }
}
