import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculoRoutingModule } from './curriculo-routing.module';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CurriculoListComponent } from './curriculo-list/curriculo-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CurriculoComponent, CurriculoListComponent],
  imports: [
    CommonModule,
    CurriculoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CurriculoModule { }
