import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuario:Usuario = {}

  constructor
    (
      public router: Router,
      private usuarioService:UsuarioService,) { 
      
      
    }
  @Input()
  peso:number
  @Input()
  edad:string
  @Input()
  imc:number

  ngOnInit() {
    this.usuarioService.getUsuFromStorage().then(data => this.usuario = data)
  }
  
  cambiarDatos(){
    this.usuarioService.saveUsuario(this.usuario)
  }
  goToFav() {
    this.router.navigateByUrl("fav")
  }
  goToUser() {
    this.router.navigateByUrl("usuario")
  }
  goHome() {
    this.router.navigateByUrl("home")
  }
  goToRegister(){
    this.router.navigateByUrl("registro")
  }

}
