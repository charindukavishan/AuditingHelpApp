import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';

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
  constructor(private reg:RegserviceService) { }

  ngOnInit() {
  }
  serverErrorMessages='';
  save(){
    this.reg.storedetails(this.personal)
            .subscribe(
                (response)=>{if(response){
                    this.serverErrorMessages="You Now Park Owner!"
                }
                
                }
                ,
                (error)=>{console.log(error)
                {if(error) this.serverErrorMessages='Your email is already exists';}}
              );
  }
}
