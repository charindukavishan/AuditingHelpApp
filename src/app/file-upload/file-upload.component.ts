import { FilesService } from '../servers/files.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { RegserviceService } from '../servers/regservice.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private FileService: FilesService,private service:RegserviceService,public user:UserProfileComponent) { }
  private files = [];
  id='';
  private url = 'http://localhost:3000/api/upload/'+this.id;
  private uploader: FileUploader;
au='Bearer '+ this.service.getToken();
  ngOnInit() {
    this.id=this.service.getid();
    // console.log(this.id)
    
this.url='http://localhost:3000/api/upload/'+this.service.getid(); 
console.log(this.url)
    this.FileService.showFileNames(this.id).subscribe(response => {console.log(response)
      for (let i = 0; i < response.json().length; i++) {
        this.files[i] = {
          filename: response.json()[i].filename,
          originalname: response.json()[i].originalname,
          contentType: response.json()[i].mimetype,
          time:response.json()[i].time,
        };console.log(response.json()[i].mimetype)
      }
    });

    this.uploader = new FileUploader({url:this.url ,itemAlias: 'photo'});

  }

  downloadPdf(filename, contentType) {
    this.FileService.downloadPDF(filename, contentType).subscribe(
      (res) => {console.log(res)
        const file = new Blob([res.blob()], { type: contentType });
        console.log(file)
      const fileURL = URL.createObjectURL(file);
      console.log(fileURL)
      window.open(fileURL);


      // window.open('/download');
      }
    );
  }

  clear(){
    this.files = [];
    this.id='';
  }

}
