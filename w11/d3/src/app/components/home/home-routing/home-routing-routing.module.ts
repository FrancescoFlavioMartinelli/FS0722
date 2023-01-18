import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home.component';

//tutte le rotte interne al path del modulo che ha caricato questo
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
  //usando forChild() e non forRoot() le rotte sono messe in coda al path homeRouting (definito nel app-module al momento del lazy loading)
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingRoutingModule { }
