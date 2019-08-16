import { Component, OnInit } from '@angular/core';

import {Escola} from '../entidade/escola'
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-salvar-escola',
  templateUrl: './salvar-escola.page.html',
  styleUrls: ['./salvar-escola.page.scss'],
})
export class SalvarEscolaPage implements OnInit {

  escola: Escola = new Escola();
  constructor(private banco:AngularFireDatabase) { }
  salvar(){
    this.banco.list('escola').push(this.escola);
    this.escola = new Escola();
    alert("salvo com sucesso");
  }

  ngOnInit() {
  }

}
