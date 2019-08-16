import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SalvarAlunoPage } from './aluno/salvar-aluno/salvar-aluno.page';
import { ListarAlunoPage } from './aluno/listar-aluno/listar-aluno.page';
import { LoginPage } from './aluno/login/login.page';
import { SalvarEscolaPage } from './aluno/salvar-escola/salvar-escola.page';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'salvar-aluno', loadChildren: './aluno/salvar-aluno/salvar-aluno.module#SalvarAlunoPageModule' },
  { path:  'aluno', component: SalvarAlunoPage  },
  { path: 'listar',component:ListarAlunoPage},
  { path: 'listar-aluno', loadChildren: './aluno/listar-aluno/listar-aluno.module#ListarAlunoPageModule' },
  { path: 'login', component:LoginPage },
  { path: 'salvar-escola', loadChildren: './aluno/salvar-escola/salvar-escola.module#SalvarEscolaPageModule' },
  { path:  'escola', component: SalvarEscolaPage  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
