import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: Http) { }

    downloadPDF(filename, filetype): any {
    return this.http.get('http://127.0.0.1:3001/file/' + filename,
    { responseType: ResponseContentType.Blob });
  }

  showFileNames() {
    return this.http.get('http://127.0.0.1:3001/files');
  }
}
