import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOffering } from '../offerings/models';

@Injectable({
  providedIn: 'root'
})
export class OffertingsService {

  

  constructor(private http: HttpClient) { }

  getOfferings(): Observable<IOffering[]>{
    
    // simplifi date casting "as Observeble<>"
    return this.http.get('http://localhost:4200/assets/MockData/offerings.data.json') as Observable<IOffering[]>;
  }

}
