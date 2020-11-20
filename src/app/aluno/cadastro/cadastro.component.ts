import { ErrorHandlerService } from './../../error-handler.service';
import { AlunoService } from './../aluno.service';
import { Aluno } from './../model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

interface Role{
  name: string,
  value: string
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  alunos = [];
  permicao: Role[];
  selectedRoleCode: Role;

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private primeng: PrimeNGConfig

    ){
      this.permicao = [
        {name: 'Administrador', value: 'ADM'},
        {name: 'Usuário', value: 'USER'}
    ];
    }

  aluno = new Aluno();
  value: Date;
  displayBasic: boolean;
  selectedState: any = null;


  ngOnInit(){
    this.primeng.ripple = true;
    this.cunsultar();
  }

  showBasicDialog() {
    this.displayBasic = true;
  }


  salvar(form: FormControl){
    this.alunoService.adicionar(this.aluno)
    .then(aluno => {
      this.aluno = aluno;
      this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });
      this.displayBasic = false;
      this.router.navigate(['/cadastro']);
      this.cunsultar();
    }).catch(
      erro => this.errorHandler.handle(erro)
      );
  }

  cunsultar(){
    this.alunoService.cunsultar()
    .then(dados =>{
      this.alunos = dados;
    });
  }

  excluir(id: number){
    this.alunoService.deletar(id)
    .then(() => {
      alert('Aluno excluido com sucesso!');
      this.cunsultar();
    });
  }


}
