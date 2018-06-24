import { UserService } from './../../services/user.service';
import { Turma } from './../../models/turma';

import { Repository } from './../../repository/repository';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ResponderPage } from './responder/responder';
import { Questao } from '../../models/questao';
import { CriarQuestionarioPage } from './criar/criar-questionario';

@Component({
  selector: 'questionario',
  templateUrl: 'questionario.html'
})

export class QuestionarioPage {
  
  public turma: Turma;
  public tipo:string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
             public navParams: NavParams, private repositorio: Repository,
             public userService: UserService) {
    this.turma = navParams.get('data');
    this.tipo = UserService.getCurrentUser().tipo;
  }

  navegarParaQuestionario(questoes: Questao[]){
    
    this.navCtrl.push(ResponderPage, {data: questoes});
  }
  navegarParaAdicionarQuestionarios(){
    this.navCtrl.push(CriarQuestionarioPage, {data: this.turma});

  }
  
  

 
}


