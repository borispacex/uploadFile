import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  // private baseUrl = 'http://localhost:8080';
  private baseUrl = 'https://www.proyectosecologia.net.bo/v1';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      headers: headers,
      reportProgress: true,
      responseType: 'json'
    });

    console.log(req);
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }


}
