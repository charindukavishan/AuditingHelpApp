import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import {RegserviceService } from '../servers/regservice.service';
import { AppComponent } from '../app.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:RegserviceService,private router:Router,private state:AppComponent) { }

  model ={
    email :'',
    password:''
  };
  isAdmin:boolean;
  roll='';
  serverErrorMessages: string;
  ngOnInit() {
    if(this.service.isLoggedIn())
    this.router.navigateByUrl('/admin');
    this.isAdmin=false;
  }
 
  
    onSubmit(form : NgForm){
      this.service.login(form.value).subscribe(
        res => {
          this.service.setToken(res['token']);
        this.roll=res['role'];
        if(this.roll=="admin")
        this.isAdmin=true;
          this.router.navigateByUrl('/userprofile');
          this.state.state=true;
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    }

}
