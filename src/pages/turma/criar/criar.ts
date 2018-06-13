import { Repository } from './../../../repository/repository';
import { Turma } from './../../../models/turma';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Api } from '../../../api/routes';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';





@Component({
  selector: 'criar-turma',
  templateUrl: 'criar.html'
})
export class CriarTurmaPage {

  public form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private repositorio: Repository,
    public toastCtrl: ToastController
  ) {
    this.form = new FormBuilder().group({
      id: [null],
      nome: [null,[Validators.required]],
      professor: [null,[Validators.required]],
      turma: [null,[Validators.required]],
      senha: [null, [Validators.required]]
    });


   
  }



  criar(){
    this.repositorio.post<Turma>(Api.turmas,this.form.value).subscribe(
      (turma)=>{
        let toast = this.toastCtrl.create({
          message: "Turma criada com sucesso",
          duration: 3000
        });
        toast.present();
    },
      (error)=>{let toast = this.toastCtrl.create({
        message: "Error:" + error.message,
        duration: 3000
      });
      toast.present();
      }
    )
  }

 
}
