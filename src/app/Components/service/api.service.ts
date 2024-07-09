import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'https://abudiyab-soft.com/api/memberships';


  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {

    const headers = new HttpHeaders().set('Accept-Language', 'ar');
    return this.http.get(this.api, { headers });
  }

}
