import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DebugInterceptor } from './debug.interceptor';
import { GalleriaComponent } from './galleria/galleria.component';
import { LikesComponent } from './likes/likes.component';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GalleriaComponent,
    LikesComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DebugInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
