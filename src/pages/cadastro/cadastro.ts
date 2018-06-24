import { Repository } from './../../repository/repository';

import { UserService } from './../../services/user.service';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Api } from '../../api/routes';

@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
  
  public form: FormGroup;
  constructor(public navCtrl: NavController, public repositorio: Repository, public userService: UserService) {
    this.form = new FormBuilder().group({
      id: [null],
      nome: [[], Validators.required],
      email: [[], Validators.required],
      matricula: [[], Validators.required],
      senha: [[], Validators.required],
      confirmarSenha: [[], Validators.required],
      tipo: [[], Validators.required],
      turmas: [[]]  
      
    });


  }

  cadastrar() {
    this.repositorio.post<any>(Api.cadastrar, this.form.value).subscribe(
      (usuario) => { console.log(usuario); this.navCtrl.pop() },
      (error) => { console.log(error) }
    );
  }



}
