import { ErrorHandlerService } from './../../error-handler.service';
import { AlunoService } from './../aluno.service';
import { Aluno } from './../model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  aluno = new Aluno;

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService
    ){}

  ngOnInit(){

  }

  selectedState: any = null;

  sexo: any[] = [
      {name: 'Masculino', value: 'Masculino'},
      {name: 'Feminino', value: 'Feminino'}
  ];

  states: any[] = [
    { value: 'AC', name: 'Acre' },
    { value: 'AL', name: 'Alagoas' },
    { value: 'AM', name: 'Amazonas' },
    { value: 'AP', name: 'Amapá' },
    { value: 'BA', name: 'Bahia' },
    { value: 'CE', name: 'Ceará' },
    { value: 'DF', name: 'Distrito Federal' },
    { value: 'ES', name: 'Espírito Santo' },
    { value: 'GO', name: 'Goiás' },
    { value: 'MA', name: 'Maranhão' },
    { value: 'MG', name: 'Minas Gerais' },
    { value: 'MS', name: 'Mato Grosso do Sul'},
    { value: 'MT', name: 'Mato Grosso' },
    { value: 'PA', name: 'Pará' },
    { value: 'PB', name: 'Paraíba' },
    { value: 'PE', name: 'Pernambuco' },
    { value: 'PI', name: 'Piauí' },
    { value: 'PR', name: 'Paraná' },
    { value: 'RJ', name: 'Rio de Janeiro' },
    { value: 'RN', name: 'Rio Grande do Norte' },
    { value: 'RO', name: 'Rondônia' },
    { value: 'RR', name: 'Roraima' },
    { value: 'RS', name: 'Rio Grande do Sul'},
    { value: 'SC', name: 'Santa Catarina' },
    { value: 'SE', name: 'Sergipe' },
    { value: 'SP', name: 'São Paulo' },
    { value: 'TO', name: 'Tocantins'}
  ];


  salvar(form: FormControl){
    this.alunoService.adicionar(this.aluno)
    .then(aluno => {
      this.aluno = aluno;
      this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });
      this.router.navigate(['/cadastro']);
    }).catch(
      erro => this.errorHandler.handle(erro)
      );
  }


}
