import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newpw-component',
  templateUrl: './newpw-component.component.html',
  styleUrls: ['./newpw-component.component.css']
})
export class NewpwComponentComponent implements OnInit {
  model ={
    newpassword :'',
    confirmnewPassword:'',
    email:'',
  };
  constructor(private service: RegserviceService, private router: Router,private route: ActivatedRoute) { }
 private id: String;
  private sub: any;
 emai;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['token'];});
    this.service.newpassword(this.id).subscribe(
      res => {
       // console.log(res);
        this.emai=res['user'];
        this.model.email=this.emai.email;
        console.log(this.model.email);

      },
      err => { 
        console.log(err);
        
      });
  }
msg;
  onSubmit(){
    this.service.savepassword(this.model).subscribe(
      res => {
        console.log(res);
        if(res['sucsess']==false){
          this.msg=res['message'];
          this.router.navigate(['login']);
        }else{
         this.model.newpassword ='';
         this.model.confirmnewPassword='';
         
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
