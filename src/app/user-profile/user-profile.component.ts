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
  constructor(private service: RegserviceService, private router: Router) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(res);
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
