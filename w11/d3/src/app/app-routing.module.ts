import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { 
    path: 'homeRouting',
    //non possiamom impostare il component della rotta perchèm non vogliamo caricarlo finche non ci serve
    //usiamo loadChildren (lazy loading) per caricare un modulo (con il suo routing) solo quando la rotta è raggiunta
    loadChildren: () => {
      return import('./components/home/home-routing/home-routing.module').then(m => m.HomeRoutingModule)
    }
  },
  {
    path: 'sports',
    loadChildren: ()=>{return import('./sports/sports.module').then((m)=>{return m.SportsModule})},
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
