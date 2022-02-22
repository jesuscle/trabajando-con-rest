import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  fechaCreacion = new Date();
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm){
    if(form.valid){
      this.usuario = form.value;
      this.crearUsuario(this.usuario);
    }
  }

  crearUsuario(usuario: Usuario){
    this.httpClient.post<any>('https://reqres.in/api/users', usuario).subscribe(
      response => {
        this.fechaCreacion = response.createdAt;
      }
    );
  }
}
