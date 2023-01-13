import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletatiComponent } from './completati/completati.component';
import { NonCompletatiComponent } from './non-completati/non-completati.component';
import { ListaComponent } from './lista/lista.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormNuovoComponent } from './form-nuovo/form-nuovo.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletatiComponent,
    NonCompletatiComponent,
    ListaComponent,
    NavbarComponent,
    FormNuovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
