import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario:Usuario={}
  usuarioId:number = 1
  @Input()
  nombre:string
  @Input()
  edad:string
  @Input()
  peso:number
  @Input()
  altura:number
  @Input()
  imc:number

  constructor(public router:Router,
              private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  saveUsuario(usuario:Usuario){
     usuario.id = this.usuarioId++
     usuario.nombre = this.nombre
     usuario.edad = this.edad
     usuario.peso = this.peso
     usuario.altura = this.altura
     usuario.imc = this.imc
    this.usuarioService.saveUsuario(usuario)
    this.router.navigateByUrl("/home")

  }

}
