import { UserService } from './../../services/user.service';
import { Turma } from './../../models/turma';

import { Repository } from './../../repository/repository';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Questionario } from '../../models/questionario';
import { ResponderPage } from './responder/responder';
import { Questao } from '../../models/questao';

@Component({
  selector: 'questionario',
  templateUrl: 'questionario.html'
})

export class QuestionarioPage {
  public questionarios: Questionario[];
  public tipo:string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
             public navParams: NavParams, private repositorio: Repository,
             public userService: UserService) {
    this.questionarios = navParams.get('data');
    this.tipo = UserService.getCurrentUser().tipo;
  }

  navegarParaQuestionario(questoes: Questao[]){
    
    this.navCtrl.push(ResponderPage, {data: questoes});
  }
  
  

 
}


