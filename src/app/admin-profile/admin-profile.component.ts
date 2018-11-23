import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {


  userDetails;
  userId='';
  constructor(private service: RegserviceService, private router: Router) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.userId=this.userDetails.id;
        this.service.setid(this.userDetails._id);
        console.log(res);
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
