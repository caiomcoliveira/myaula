import { UserService } from './../../services/user.service';
import { Turma } from './../../models/turma';

import { Repository } from './../../repository/repository';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { QuestionarioPage } from '../questionario/questionario';

@Component({
  selector: 'turma',
  templateUrl: 'turma.html'
})
export class TurmaPage {
  public turma: Turma;
  public tipo: string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public navParams: NavParams,
    public userService: UserService) {
    this.turma = navParams.get('data');
    this.tipo = UserService.getCurrentUser().tipo;
  }

  navegarParaQuestionarios() {
    console.log(this.turma.questionarios);
    this.navCtrl.push(QuestionarioPage, {data: this.turma.questionarios});
  }
  navegarParaForum() {

  }
  navegarParaAdicionarQuestionarios() {

  }
  removerTurma() {

  }


}


