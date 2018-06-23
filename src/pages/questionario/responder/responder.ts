import { Repository } from './../../../repository/repository';
import { UserService } from './../../../services/user.service';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { AlertController } from 'ionic-angular';
import { Questao } from '../../../models/questao';

@Component({
    selector: 'responder',
    templateUrl: 'responder.html',
    
})

export class ResponderPage {
    public questoes: Questao[];
    public tipo: string;
    public respostas: number[] = [];
    constructor(public navCtrl: NavController, public modalCtrl: ModalController,
        public navParams: NavParams, private repositorio: Repository,
        public userService: UserService, public alertCtrl: AlertController) {
        this.questoes = navParams.get('data');
        this.tipo = UserService.getCurrentUser().tipo;
    }

    responder() {
        let i = 0;
        for (let questao of this.questoes) {
            let msg = "Incorreto";
            let corpo = this.montarCorpo(questao);
            if (this.respostas[i] == questao.gabarito)
                msg = "Correto";
            let alert = this.alertCtrl.create({
                title: 'Questão ' + (i+1) + " " + msg,
                subTitle: corpo,
                buttons: ['OK']
            });
            alert.present();
            i++;
        }

    }

    gabaritoToChar(indice: number): string {
        if (indice == 1)
            return "A"
        if (indice == 2)
            return "B"
        if (indice == 3)
            return "C"
        if (indice == 4)
            return "D"
    }
    getCor(indice, gabarito){
        return indice == gabarito ? "verde" : "vermelho";
    }

    montarCorpo(questao:Questao){
        
        let opcaoA = '<span class="'+ this.getCor(1,questao.gabarito) + '"> X% respondeu A </span></br>';
        let opcaoB = '<span class="'+ this.getCor(2,questao.gabarito) + '"> X% respondeu B </span></br>';
        let opcaoC = '<span class="'+ this.getCor(3,questao.gabarito) + '"> X% respondeu C </span></br>';
        let opcaoD = '<span class="'+ this.getCor(4,questao.gabarito) + '"> X% respondeu D </span>';

        return opcaoA + opcaoB + opcaoC + opcaoD;

    }
    


}


