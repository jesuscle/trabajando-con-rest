import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
