import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { Router } from '@angular/router';
import { FilesService } from '../../servers/files.service';
import { UserProfileComponent } from '../user-profile.component';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {
  constructor(private FileService: FilesService,private service:RegserviceService,public user:UserProfileComponent) { }
  private files = [];
  id=this.user.userId;
  ngOnInit() {
    this.FileService.recevefile(this.service.getid()).subscribe(response => {console.log(response)
      for (let i = 0; i < response.json().length; i++) {
        this.files[i] = {
          filename: response.json()[i].filename,
          originalname: response.json()[i].originalname,
          contentType: response.json()[i].mimetype,
          time:response.json()[i].time
        };console.log(response.json()[i].mimetype)
      }
    });

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
}
