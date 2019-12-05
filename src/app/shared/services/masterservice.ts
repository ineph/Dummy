import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsuariosInterface } from '../models/usuariosInterface';
import { environment } from 'src/environments/environment';

@Injectable ({
  providedIn:  'root'
})

export class MasterService {

  constructor(
    private http: HttpClient
    ) {}


    fuicionarios() {
      return this.http.get<UsuariosInterface>(`${environment.apiPadrao}Users`);
    }


    deletarUsuario(idUsuario: number) {
      return this.http.delete<UsuariosInterface>(`${environment.apiPadrao}Users/${idUsuario}`);
    }

    // cadastrarUsuario(idUsuario: number) {
    //   return this.http.post<UsuariosInterface>(`${environment.apiPadrao}Users/${idUsuario}`);
    // }


}
