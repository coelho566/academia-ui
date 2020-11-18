import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from './model'

@Injectable()
export class AlunoService {

  constructor(private http: HttpClient){}

  adicionar(aluno: Aluno): Promise<any> {

    const headers = new HttpHeaders()

    return this.http.post<Aluno>('api/user', aluno).toPromise();
  }
  
}
