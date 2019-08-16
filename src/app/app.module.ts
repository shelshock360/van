import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SalvarAlunoPage } from './aluno/salvar-aluno/salvar-aluno.page';
import { FormsModule } from '@angular/forms';
import { ListarAlunoPage } from './aluno/listar-aluno/listar-aluno.page';
import { LoginPage } from './aluno/login/login.page';
import {AngularFireAuth} from '@angular/fire/auth';
import { SalvarEscolaPage } from './aluno/salvar-escola/salvar-escola.page';



@NgModule({
  declarations: [AppComponent,SalvarAlunoPage,ListarAlunoPage,LoginPage,SalvarEscolaPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireDatabaseModule,FormsModule,
   AngularFireModule.initializeApp({
   apiKey: "AIzaSyDuqyRs6UFNOoy-WN-yC-g95mWK3dboX_E",
   authDomain: "bancoangular-ae958.firebaseapp.com",
   databaseURL: "https://bancoangular-ae958.firebaseio.com",
   projectId: "bancoangular-ae958",
   storageBucket: "bancoangular-ae958.appspot.com",
   messagingSenderId: "757208424433",
   appId: "1:757208424433:web:7f6500a1f05a6281"
    }),

  ],
  providers: [
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
