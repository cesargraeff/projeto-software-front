import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  constructor(
    private http: HttpClient
  ) { }

  listar(){
    return this.http.get<any>(environment.api+'v1/curriculos');
  }

  visualizar(id: number){
    return this.http.get<any>(environment.api+'v1/curriculos/aluno/'+id);
  }
}
