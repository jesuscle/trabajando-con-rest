import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios = new Array<Usuario>();
  tamanoTotalPaginas: number = 0;

  constructor(private httpClient: HttpClient) {}

  cargarPagina(numPagina: number): void {

    const params = { page: numPagina };
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    this.httpClient
      .get<any>('https://reqres.in/api/users', {
        headers: headers,
        params: params,
        observe: 'body',
        responseType: 'json',
      })
      .subscribe(
        (response) => {
          this.usuarios = response.data;
          this.tamanoTotalPaginas = response.total_pages;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.cargarPagina(1);
  }

  actualizarUsuario(): void {
    // this.httpClient.put(...);
  }

  contador(i: number) {
    return new Array(i);
  }
}
