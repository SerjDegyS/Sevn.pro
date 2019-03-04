import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffertingsService {

  

  constructor(private http: HttpClient) { }

  getOfferings(): Observable<Object>{
    return this.http.get('http://localhost:4200/assets/MockData/offerings.data.json');
  }

}
