import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {
  usuario: Usuario[] = []
  constructor() { }
  ngOnInit(): void {

  }

  getUsuario():Observable<Usuario[]>{
    return of(this.usuario)
  }

  saveUsuario(usuario: Usuario) {
      this.usuario.push(usuario)
    
  }
}
