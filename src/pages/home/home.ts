import { Repository } from './../../repository/repository';
import { EntrarTurmaPage } from './../turma/entrar/entrar';
import { TurmaPage } from '../turma/turma';
import { CadastroPage } from './../cadastro/cadastro';

import { HttpClient } from '@angular/common/http';
import { UserService } from './../../services/user.service';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Turma } from '../../models/turma';
import { Api } from '../../api/routes';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public title: string = "Login";
  public form: FormGroup;
  public online: boolean = false;
  public turmas: Turma[] = [];
  constructor(public navCtrl: NavController, public userService: UserService, private repostiorio: Repository) {
    this.form = new FormBuilder().group({
      email: [[],Validators.required],
      senha: [[],Validators.required]
    });
    this.online = UserService.isAuthenticated();
    if(this.online)
      this.carregarTurmas();
  }

  login(){
    this.repostiorio.post<any>(Api.login, this.form.value).subscribe(
      (user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.online = true;
        this.carregarTurmas();

      },
      (error) => {
        console.log(error.message);
      }
    )
  }

  carregarTurmas(){
    let matricula = UserService.getCurrentUser().matricula;
    this.repostiorio.get<Aluno>(Api.usuarioPorMatricula(matricula)).subscribe(
      (aluno) => { this.turmas = aluno.turmas, this.title = 'Minhas turmas';},
      (error) => { console.log('deu errado' + error)}
    );
  }

  cadastrar(){
    this.navCtrl.push(CadastroPage);
  }
  navegarParaEntrar(){
    this.navCtrl.push(EntrarTurmaPage);

  }
  navegarParaTurma(turma: Turma){
    this.navCtrl.push(TurmaPage, {
      data: turma
    });

  }
}
      