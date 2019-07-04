import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(
    private http: HttpClient
  ) { }

  adicionar(data: any){
    return this.http.post<any>(environment.api+'v1/matriculas',data);
  }

  editar(id: number, data: any){
    return this.http.put<any>(environment.api+'v1/matriculas/'+id,data);
  }
}
