import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RegserviceService } from '../servers/regservice.service';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css']
})
export class ResetpwComponent implements OnInit {


  msg='';
  constructor(private service:RegserviceService,private router:Router) { }
  model ={
    email :''
  };
  ngOnInit() {
  }
  onSubmit(form : NgForm){
    this.service.rstpw(form.value).subscribe(
      res => {
        console.log(res);
        if(res['sucsess']==false){
          this.msg=res['message'];
          this.router.navigate(['newpassword']);
        }else{
          this.msg=res['message'];
        }
      },
      err => {
        console.log(err);
        this.msg='';
      }
    );
  }

}
