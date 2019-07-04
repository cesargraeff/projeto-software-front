import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  public token: string;

  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem('token') || localStorage.getItem('token');
  }

  login(username:string, password:string, lembrar: boolean = false){

    return this.http.post<any>(environment.api+'login',{
      'user' : username,
      'pass' : password
    }).pipe(map(res => {

      if(res && res.token){
        this.token = res.token;
        if(lembrar){
          localStorage.setItem('token', res.token);
        }else{
          sessionStorage.setItem('token', res.token);
        }
      }

      return res;

    }));

  }

  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }

}
