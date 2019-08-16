import { Component, OnInit } from '@angular/core';

import{AngularFireDatabase}from '@angular/fire/database';
import { Aluno } from '../entidade/aluno';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Escola } from '../entidade/escola';

@Component({
  selector: 'app-salvar-aluno',
  templateUrl: './salvar-aluno.page.html',
  styleUrls: ['./salvar-aluno.page.scss'],
})
export class SalvarAlunoPage implements OnInit {


  aluno:Aluno= new Aluno();
  listaEscola: Observable<Escola[]>;
  

     constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaEscola = this.fire.list<Escola>('escola').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );

    }

      salvar(){

      this.fire.list('aluno').push(this.aluno);
      this.aluno = new Aluno();
      alert("salvo com sucesso");
      }

  

  ngOnInit() {
  }

}
