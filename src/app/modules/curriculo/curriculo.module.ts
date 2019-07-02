import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculoRoutingModule } from './curriculo-routing.module';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CurriculoComponent],
  imports: [
    CommonModule,
    CurriculoRoutingModule,
    SharedModule
  ]
})
export class CurriculoModule { }
