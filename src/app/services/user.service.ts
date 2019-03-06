import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { IUser } from '../offerings/models';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<IUser | null>{

      // simplifi date casting "as Observeble<>"
    return this.http.get('http://localhost:4200/assets/MockData/user.data.json').pipe(
      map(user =>{
        if(user){
          return user;
        } else return of(null);
      })
    ) as Observable<IUser>;
  }

}
