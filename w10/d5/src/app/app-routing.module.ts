import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiComponent } from './completati/completati.component';
import { NonCompletatiComponent } from './non-completati/non-completati.component';

const routes: Routes = [
  {
    path: '',
    component: NonCompletatiComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
