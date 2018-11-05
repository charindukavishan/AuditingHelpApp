import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  personal={
    firstName:'',
    lastName : '',
    email:'',
    tel: '',
    nic:'',
    password:'',
    confirmPassword:''

  }
  constructor(private reg:RegserviceService,public route:Router) { }

  ngOnInit() {
  }
  serverErrorMessages='';
  save(){
    this.reg.storedetails(this.personal)
            .subscribe(
                (response)=>{if(response){
                    this.serverErrorMessages="Registration Succsesfull";
                    this.route.navigateByUrl('/login');

                }
                
                }
                ,
                (error)=>{console.log(error)
                {if(error) this.serverErrorMessages='Your email is already exists';}}
              );
  }
}
