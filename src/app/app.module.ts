import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuariosComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
