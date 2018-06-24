import { FormGroup, FormArray } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { Repository } from './../../../repository/repository';
import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Turma } from '../../../models/turma';
import { Questionario } from '../../../models/questionario';
import { Api } from '../../../api/routes';


@Component({
  selector: 'criar-questionario',
  templateUrl: 'criar-questionario.html'
})

export class CriarQuestionarioPage {
  public turma: Turma;
  public tipo:string;
  public form: FormGroup;
  public questoes: any;
  public formBuilder: FormBuilder;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
             public navParams: NavParams, private repositorio: Repository,
             public userService: UserService) {
    this.turma = navParams.get('data');
    this.tipo = UserService.getCurrentUser().tipo;
    this.formBuilder = new FormBuilder();            
    this.form = this.formBuilder.group({
        id: [null],
        nome: [[], Validators.required],
        data: [new Date().toJSON().slice(0,10), Validators.required],
        questoes: this.formBuilder.array([ this.criarQuestao() ]),
        turma: [this.turma.id]
        
        
    });


  }

  criarQuestao(){
    return this.formBuilder.group({
        id: [null],
        enunciado: [],
        opcaoA: [],
        opcaoB: [],
        opcaoC: [],
        opcaoD: [],
        gabarito: []
    });
  }
  adicionarQuestao(){
    this.questoes = this.form.get('questoes') as FormArray;
    this.questoes.push(this.criarQuestao());
  }

  criarQuestionario(){
      this.repositorio.post<Questionario>(Api.questionario, this.form.value).subscribe(
        (success)=> {console.log(success)},
        (error)=> {console.log(error)}
      );

  }
  
  
  

 
}


