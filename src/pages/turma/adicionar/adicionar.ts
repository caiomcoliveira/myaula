import { Turma } from './../../../models/turma';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Api } from '../../../api/routes';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'adicionar-turma',
  templateUrl: 'adicionar.html'
})
export class AdicionarTurmaPage {

  public form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient,
    public toastCtrl: ToastController
  ) {
    this.form = new FormBuilder().group({
      id: [null],
      nome: [null,[Validators.required]],
      senha: [null, [Validators.required]]
    });


   
  }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',    
      'X-CSRFToken': this.getCookie('csrftoken')
    })
  };
  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) 
      return parts.pop().split(";").shift();
  }

  adicionar(){
    this.http.post<any>(Api.turmas,this.form.value, this.httpOptions).subscribe(
      (turma)=>{
        let toast = this.toastCtrl.create({
          message: "Turma adicionada com sucesso",
          duration: 3000
        });
        toast.present();
    },
      (error)=>{let toast = this.toastCtrl.create({
        message: "Error:" + error,
        duration: 3000
      });
      toast.present();
      }
    )
  }

 
}
