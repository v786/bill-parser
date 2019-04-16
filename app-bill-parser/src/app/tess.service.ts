import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TessService {

  constructor(private _http: HttpClient) { }

  recognize(img): Observable<any> {
    const url = 'http://localhost:3000/fetchrecords?number=';
    return this._http.get<any>(url + img);
  }

}
