import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  urlApi: string = `${environment.serverUrl}/images`;
  constructor(private http: HttpClient) { }

  addImage(img: FormData): Observable<string> {
    return this.http.post<string>(this.urlApi, img, {
      withCredentials: true,
    });
  }
}
