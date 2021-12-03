import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { FoodService } from 'src/app/services/food.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuarios: Usuario[] =[]
  constructor
    (
      private foodService: FoodService,
      public router: Router,
      private usuarioService:UsuarioService,
      
    ) { }

  ngOnInit() {
    this.usuarioService.getUsuario().subscribe(data => this.usuarios = data)
  }
  goToFav() {
    this.router.navigateByUrl("/fav")
  }
  goToUser() {
    this.router.navigateByUrl("/usuario")
  }
  goHome() {
    this.router.navigateByUrl("/home")
  }
  goToRegister(){
    this.router.navigateByUrl("/registro")
  }

}
