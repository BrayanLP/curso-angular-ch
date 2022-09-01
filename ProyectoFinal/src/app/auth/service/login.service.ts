import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioActual =  JSON.stringify(localStorage.getItem("DATA")) || {}
  private sesionActiva = localStorage.getItem("ACCESS") || false;

  constructor() { }

  obtenerUsuarioActual(){
    return this.usuarioActual;
  }

  obtenerSesionActiva(){
    return this.sesionActiva;
  }
}
