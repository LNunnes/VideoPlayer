import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodapeComponent } from './../rodape/rodape.component';
import { TopoComponent } from './../topo/topo.component';

@NgModule({
  declarations: [
    TopoComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopoComponent,
    RodapeComponent
  ]
})
export class SharedModule { }
