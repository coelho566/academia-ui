import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from './model'

@Injectable()
export class AlunoService {

  url = 'api/api/user';

  constructor(private http: HttpClient){}

  adicionar(aluno: Aluno): Promise<any> {

    return this.http.post<Aluno>(this.url, aluno).toPromise();
  }

  cunsultar(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
  
  deletar(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
    .toPromise()
    .then(() => null);
  }
}
