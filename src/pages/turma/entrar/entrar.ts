import { EntrarTurmaModalPage } from './modal/entrar-modal';
import { Repository } from './../../../repository/repository';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Turma } from '../../../models/turma';

import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Api } from '../../../api/routes';

@Component({
  selector: 'entrar-turma',
  templateUrl: 'entrar.html'
})
export class EntrarTurmaPage {
  
  public turmas: Turma[] =[]
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private repositorio: Repository) {
    this.carregarTurmas();
    
  }

  public carregarTurmas(){
    this.repositorio.get<any[]>(Api.turmas).subscribe(
      (turmas)=> {this.turmas = turmas},
      (error) =>{
        this.turmas = [];  
        console.log(error);
      }
    )
  }

  public entrar(turma){
    let modal = this.modalCtrl.create(EntrarTurmaModalPage, {turma: turma});
    modal.present();
  }

 
}


