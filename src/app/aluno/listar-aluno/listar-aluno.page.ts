import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Aluno } from '../entidade/aluno';
@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.page.html',
  styleUrls: ['./listar-aluno.page.scss'],
})
export class ListarAlunoPage implements OnInit {

  items: Observable<Aluno[]>;
  alunos: Observable<Aluno[]>;

  constructor(private banco: AngularFireDatabase) {
    this.alunos = this.banco.list<Aluno>('aluno').snapshotChanges().pipe(
      map(  lista => lista.map( linha => ({ key: linha.payload.key, ... linha.payload.val()  })  )  )
    );
  }

 
    excluir(key: string, aluno:Aluno){
    this.banco.list('aluno/' + key).remove();
    alert("excluido com sucesso");
  }

  ngOnInit() {
  }

}