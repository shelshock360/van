import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 

  usuario: Usuario = new Usuario();

  constructor(private afAuth: AngularFireAuth, private router: Router) {
   }

   logar(){
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email,
    this.usuario.senha).then((res) => {
    this.router.navigate(['home']);
    }).catch( (erro) => console.log(erro) );
   }

   logout() {
      this.afAuth.auth.signOut();
      this.router.navigate(['/']);
    }
  ngOnInit() {
  }

}
