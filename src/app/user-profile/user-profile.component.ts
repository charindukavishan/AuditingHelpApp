import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails;
  userId='';
  constructor(private service: RegserviceService, private router: Router) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.userId=this.userDetails._id;
        this.service.setid(this.userDetails._id);
        // console.log(this.userId);
        console.log(this.userDetails)
      },
      err => { 
        console.log(err);
        
      });
  }
  onLogout(){
    this.service.deleteToken();
    this.router.navigate(['/login']);
  }
}
