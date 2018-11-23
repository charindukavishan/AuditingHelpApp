import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FilesService } from '../servers/files.service';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-adminuploads',
  templateUrl: './adminuploads.component.html',
  styleUrls: ['./adminuploads.component.css']
})
export class AdminuploadsComponent implements OnInit {


  constructor(private FileService: FilesService,private service:RegserviceService) { }
  private files = [];
  id='';
  user='';
  private url = '';
  private uploader: FileUploader;
au='Bearer '+ this.service.getToken();
  ngOnInit() {
    const token =this.service.getToken();
    const tokenPayload = decode(token);
    this.id=tokenPayload._id;
this.url='http://localhost:3000/api/upload/'+this.service.getid()+'/'+this.service.getuserid(); 
console.log(this.url)
    
    this.uploader = new FileUploader({url:this.url ,itemAlias: 'photo'});


}




clear(){
  this.files = [];
  this.id='';
}

}
