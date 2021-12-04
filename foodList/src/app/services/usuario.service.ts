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

 async saveUsuario(usuario: Usuario):Promise<boolean>{
      this.usuario = usuario
      await this.saveUsuIntoStorage();
      return true
  }
  /*getUsuario(id:number): Observable<Usuario>{
    this.usuario = this.usuarios.filter(data => data.id == id)[0]
    return of(this.usuario)
  }*/
  /*async deleteFavorites(id:number):Promise<boolean>{
    this.favorites = this.favorites.filter(data => data.id != id)
    await this.saveFavIntoStorage();
    await this.saveFavCounterIntoStorage();
    return true
  }*/

 /* async saveFav(usuario: Usuario): Promise<boolean> {
    for (let index = 0; index < this.favorites.length; index++) {
      if(this.favorites[index].id == favorite.id){
        contador++
      }
    }
      if(contador == 0){
        this.favorites.push(favorite)
        favorite.id = this.favoriteCounter++
      }
    await this.saveFavIntoStorage();
    await this.saveFavCounterIntoStorage();
    return true
  }*/

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

  /* Obtener el contador de facturas del disco 
  async getFavCounterFromStorage(): Promise<number> {
    const tc = await Storage.get({ key: 'favCounter' });
    return Number.isInteger(+tc.value) ? + tc.value : 0;
  }*/

}
