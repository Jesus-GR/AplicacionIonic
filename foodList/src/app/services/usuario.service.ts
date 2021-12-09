import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../model/usuario';
import { Capacitor } from '@capacitor/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {
  usuarios: Usuario[] = []
  usuario:Usuario
  constructor() { 
    this.getUsuFromStorage().then(data => this.usuario = data)
  }
  ngOnInit(): void {
  }

  /*getUsuarios():Observable<Usuario[]>{
    return of(this.usuarios)
  }*/
  async deleteUsuario():Promise<boolean>{
    this.usuario = {}
    await this.saveUsuIntoStorage();
    return true
}

 async saveUsuario(usuario: Usuario):Promise<boolean>{
      this.usuario = usuario
      await this.saveUsuIntoStorage();
      return true
  }

  async saveUsuIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'Usuario',
      value: JSON.stringify(this.usuario) 
    });
    return true
  }

  
  
  async getUsuFromStorage(): Promise<Usuario> {
    const retorno = await Storage.get({ key: 'Usuario' });
    return JSON.parse(retorno.value) ? JSON.parse(retorno.value) : {};
  }

}
