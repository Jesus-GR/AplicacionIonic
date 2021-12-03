import { Injectable, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class FoodService implements OnInit {

  favorites:Food[]
  favoriteCounter: number = 0
  arrayNombres: string[] = []
  constructor(private http: HttpClient) {
    this.getFavFromStorage().then(data => this.favorites = data)
    this.getFavCounterFromStorage().then(data => this.favoriteCounter = data)
  }
  ngOnInit() { }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>("../assets/foods.json")
  }

  getFavorites(): Observable<Food[]> {
    return of(this.favorites)
  }
  deleteFavorite(id: number) {
    this.favorites = this.favorites.filter(data => data.id !== id)
  }

  deleteFood(id:number){
    this.favorites = this.favorites.filter(data => data.id != id)
    this.saveFav
  }

  async saveFav(favorite: Food): Promise<boolean> {
    this.arrayNombres = this.favorites.filter(data => data.nombre).map(toString)
    if (!this.arrayNombres.includes(favorite.nombre)) {
      favorite.id = this.favoriteCounter++
      this.favorites.push(favorite);

    }
    await this.saveFavIntoStorage();
    await this.saveFavCounterIntoStorage();
    return true
  }

  async saveFavIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'favs',
      value: JSON.stringify(this.favorites) //Esto es para converitr un objeto de tareas en un string tipo json
    });
    return true
  }

  async saveFavCounterIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'favCounter', //Esto tiene que llamarse igual que en le méodo getTaskCounter()
      value: this.favoriteCounter.toString() //Tenemos que pasarlo a string. 
    })
    return true
  }
  async getFavFromStorage(): Promise<Food[]> {
    const retorno = await Storage.get({ key: 'favs' });

    return JSON.parse(retorno.value) ? JSON.parse(retorno.value) : [];
  }

  /* Obtener el contador de facturas del disco */
  async getFavCounterFromStorage(): Promise<number> {
    const tc = await Storage.get({ key: 'favCounter' });
    return Number.isInteger(+tc.value) ? + tc.value : 0;
  }

}
