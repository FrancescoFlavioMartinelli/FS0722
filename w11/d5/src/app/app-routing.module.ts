import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: ()=>import("./movie/movie.module").then(m=>m.MovieModule)
  },
  {
    path: 'auth',
    loadChildren: ()=>import("./auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path: 'user',
    loadChildren: ()=>import("./user/user.module").then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
