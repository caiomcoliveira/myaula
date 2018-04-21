import { CadastroPage } from './../pages/cadastro/cadastro';
import { Repository } from './../repository/repository';

import { UserService } from './../services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CriarTurmaPage } from '../pages/turma/criar/criar';
import { EntrarTurmaPage } from '../pages/turma/entrar/entrar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EntrarTurmaModalPage } from '../pages/turma/entrar/modal/entrar-modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    EntrarTurmaPage,
    EntrarTurmaModalPage,
    CriarTurmaPage,
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    CriarTurmaPage,
    EntrarTurmaPage,
    EntrarTurmaModalPage,    
  ],
  providers: [
    UserService,
    Repository,
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
