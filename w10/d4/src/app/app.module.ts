import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MaiuscoloPipe } from './maiuscolo.pipe';
import { EvidenziaDirective } from './evidenzia.directive';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActiveComponent,
    InactiveComponent,
    PostCardComponent,
    MaiuscoloPipe,
    EvidenziaDirective,
    PostDetailComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
