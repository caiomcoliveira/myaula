import { UserService } from './../../../../services/user.service';
import { Repository } from './../../../../repository/repository';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Api } from '../../../../api/routes';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';



@Component({
  selector: 'entrar-turma-modal',
  templateUrl: 'entrar-modal.html'
})
export class EntrarTurmaModalPage {
  
  public form: FormGroup;
  constructor(public viewCtrl: ViewController,public navParams: NavParams, private repositorio: Repository, private userService: UserService) {
    this.form = new FormBuilder().group({
      matricula: [UserService.getCurrentUser().matricula],
      senha: [null, [Validators.required]],
      turma: [navParams.get('turma')]
    });


   
  }

  public entrar(){
    this.repositorio.post<any>(Api.entrarTurma, this.form.value).subscribe(
      (sucesso)=>{ console.log("sucesso")},
      (error)=>{ console.log("deu errado")}
    )
  }

  public dismiss(){
    this.viewCtrl.dismiss();
  }

  
 
}
