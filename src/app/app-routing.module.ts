
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopoComponent } from './shared/topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './shared/rodape/rodape.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
