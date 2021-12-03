import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private foodService:FoodService,
    public router:Router) { }

  ngOnInit() {
  }


  goToFav(){
    this.router.navigateByUrl("/fav")
  }
  goToUser(){
    this.router.navigateByUrl("/usuario")
  }
  goHome(){
    this.router.navigateByUrl("/home")
  }

}
