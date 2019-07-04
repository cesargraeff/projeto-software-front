import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './../dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'alunos',
        loadChildren: './../aluno/aluno.module#AlunoModule'
      },
      {
        path: 'curriculos',
        loadChildren: './../curriculo/curriculo.module#CurriculoModule'
      },
      {
        path: 'cursos',
        loadChildren: './../curso/curso.module#CursoModule'
      },
      {
        path: 'disciplinas',
        loadChildren: './../disciplina/disciplina.module#DisciplinaModule'
      },
      {
        path: 'usuarios',
        loadChildren: './../usuario/usuario.module#UsuarioModule'
      },
      {
        path: '',
        redirectTo: 'dashboard',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
