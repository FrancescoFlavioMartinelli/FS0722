import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'active',
    component: ActiveComponent
  },
  {
    path: 'inactive',
    component: InactiveComponent
  },
  {
    //questo tipo di path visualizzerà il component nel router-outlet principale
    path:'details/:id', //params del routing- può essre letto nel component
    component: PostDetailComponent
  },
  // {
  //   path: 'active/details/:id',
  //   component: PostDetailComponent
  // },
  // {
  //   path: 'inactive/details/:id',
  //   component: PostDetailComponent
  // }
  {
    path: 'users',
    component: UserComponent,
    children: [
      {
        path:':id',
        component: UserDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
