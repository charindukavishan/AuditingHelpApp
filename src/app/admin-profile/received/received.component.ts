import { Component, OnInit } from '@angular/core';
import { FilesService } from '../servers/files.service';
import { RegserviceService } from '../../servers/regservice.service';
@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {

   constructor(private FileService: FilesService,private service:RegserviceService) { }
  private files = [];

  response:any;

  ngOnInit() {
        this.FileService.showFileNames().subscribe(res => {
          this.response=res;
          console.log(this.response)
      for (let i = 0; i < this.response.json().length; i++) {
        this.files[i] = {
          filename: this.response.json()[i].filename,
          originalname: this.response.json()[i].originalname,
          contentType: this.response.json()[i].mimetype,
          time:this.response.json()[i].time,
          username:this.response.json()[i].firstName
        };console.log(this.response.json()[i].mimetype)
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
