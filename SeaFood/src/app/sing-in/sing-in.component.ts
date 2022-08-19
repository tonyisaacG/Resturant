import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtParserService } from '../BackEnd/Global/jwt-parser.service';
import { AuthUserService } from '../BackEnd/Services/auth-user.service';
import { SignInUpService } from '../BackEnd/Services/sign-in-up.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  UserRegForm?: FormGroup;
  UserLogForm?: FormGroup;

  isOpen: Boolean = false
  ToggleSingnInAndSignUp() {
    this.isOpen = !this.isOpen

    console.log(this.isOpen)
  }

  constructor(private loginfrm: FormBuilder,
    private auth: AuthUserService,
    private signInUp: SignInUpService,
    private router: Router,
    private jwtParser:JwtParserService) {

    // this.UserRegForm = this.fb.group({
    //   name:['',Validators.required],
    //   username:['',Validators.required],
    //   password:['',Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]
    // });

    this.UserLogForm = this.loginfrm.group({
      "username": ['', [Validators.required, Validators.minLength(6)]],
      "password": ['', [Validators.required, Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]]
    });
  }


  ngOnInit(): void {

  }


  get LoginfrmCtrl() { return this.UserLogForm.controls; }

  // get RegisterfrmCtrl() { return this.UserRegForm.controls; }



  RegisterUser() {

  }

  LoginUser() {
    this.signInUp.Login(this.UserLogForm.value).subscribe((data: any) => {
      console.log(data.id);
      console.log(data.username);
      this.jwtParser.setToken(data);
      console.log(this.jwtParser.getDecodeToken());
      console.log(this.jwtParser.getUserId())
      console.log(this.jwtParser.getUsername())
      console.log(this.jwtParser.getUserRole())
      console.log(this.jwtParser.getExpiryTime())
      console.log(this.jwtParser.isTokenExpired())
      this.auth.Login(data);
      this.router.navigate(['admin']);
    }, (error) => {
      console.log(error.message);
      this.UserLogForm.reset();
      this.router.navigate(['signInOut'])
    })
  }
}
