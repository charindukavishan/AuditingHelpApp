import { Component } from '@angular/core';
import { RegserviceService } from './servers/regservice.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state=false;
  constructor(private service:RegserviceService) {
  }
click(){
  this.service.deleteToken();
  this.state=false;
}
js(){
  
  $("#toggle").click(function() {
     // alert('aaaa')
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");

      });
}
  ngOnInit() {
      if(this.service.isLoggedIn())
      this.state=true;
      

  
  }
}
