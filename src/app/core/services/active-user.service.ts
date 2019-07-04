import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {

  private subject = new BehaviorSubject(null);
  public usuario = this.subject.asObservable();

  constructor( private http: HttpClient ) { 
    this.http.get<any>(environment.api+'login').subscribe(res => {
      this.subject.next(res.data);
    }, err => {
      console.log(err);
    });
  }

}
