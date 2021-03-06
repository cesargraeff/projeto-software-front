import { CurriculoListComponent } from './curriculo-list/curriculo-list.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CurriculoComponent
  },
  {
    path: 'listar',
    component: CurriculoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculoRoutingModule { }
