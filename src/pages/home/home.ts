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
  public form: FormGroup;
  public online: boolean = false;
  public turmas: Turma[] = [];
  constructor(public navCtrl: NavController, public userService: UserService, private http: HttpClient) {
    this.form = new FormBuilder().group({
      email: [[],Validators.required],
      senha: [[],Validators.required]
    });
    // this.online = UserService.isAuthenticated();
    // if(this.online)
    //   this.carregarTurmas();
  }

  login(){
    this.online = true;
    localStorage.setItem('currentUser', JSON.stringify(this.form.value));
    this.carregarTurmas();
  }

  carregarTurmas(){
    let email = UserService.getCurrentUser().email;
    this.http.get<Aluno>(Api.alunoPorMatricula(email)).subscribe(
      (aluno) => { this.turmas = aluno.turmas},
      (error) => { console.log('deu errado')}
    );
  }

  cadastrar(){
    this.navCtrl.push(CadastroPage);
  }
}
