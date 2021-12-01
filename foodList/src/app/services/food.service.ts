import { Injectable } from '@angular/core';
import { Food } from '../model/food';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    foods: Food[] = []

    constructor(private http: HttpClient) { }

    getFoods(): Observable<Food[]> {
        return this.http.get<Food[]>("../assets/foods.json")
    }
}
