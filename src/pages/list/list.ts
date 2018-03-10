import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public alunos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.carregarAlunos();


   
  }

  carregarAlunos(){
    this.http.get<any[]>('http://localhost:5002/alunos').subscribe(
      (alunos) => { this.alunos = alunos},
      (error) => { console.log('deu errado')}
    );
  }
}
