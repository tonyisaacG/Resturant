import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../BackEnd/Services/auth-user.service';
import { SignInUpService } from '../BackEnd/Services/sign-in-up.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  UserRegForm : FormGroup;
  UserLogForm : FormGroup;

  isOpen:Boolean = false
  ToggleSingnInAndSignUp(){
    this.isOpen = !this.isOpen

    console.log(this.isOpen)
  }

  constructor(private fb:FormBuilder,
              private auth:AuthUserService,
              private signInUp:SignInUpService,
              private router:Router) { 

                this.UserRegForm = this.fb.group({
                  name:['',Validators.required],
                  username:['',Validators.required],
                  password:['',Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]
                });
            
                this.UserLogForm = this.fb.group({
                  username:['',Validators.required],
                  password:['',Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]
                });
              }


  ngOnInit(): void {
    
  }


  get LoginfrmCtrl() { return this.UserLogForm.controls; }

  get RegisterfrmCtrl() { return this.UserRegForm.controls; }



  RegisterUser(){
    
  }

  LoginUser(form:FormGroup){
    this.signInUp.Login(form).subscribe((data:any)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }
}
