import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food.service';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {
favoritos:Food[] =[]
esDesplegado:boolean = false
  constructor(private foodService:FoodService,
    public router:Router,
    private alertController:AlertController) {}

  ngOnInit() {
    this.foodService.getFavorites().subscribe(data => this.favoritos = data)
  }

  cambiarEsDesplegado(){
    if(this.esDesplegado == false){
      this.esDesplegado = true
    }else{
      this.esDesplegado= false
    }
  }
  async presentAlertConfirma(f:Food) {
    const alert = await this.alertController.create({
      header: 'Eliminar favorito',
      message: `¿Estás seguro que deseas borrar <strong>${f.nombre}</
strong> de la lista de favoritos?`,
buttons: [ {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
console.log('Confirm Cancel: blah');
} }, {
          text: 'Okay',
          handler: () => {
            this.deleteFavorites(f.id)
            this.ngOnInit()
          }
} ]
});
    await alert.present();
  }

  deleteFavorites(id:number){
    this.foodService.deleteFavorites(id)
  }
  goToFav(){
    this.router.navigateByUrl("fav")
  }
  goToUser(){
    this.router.navigateByUrl("usuario")
  }
  goHome(){
    this.router.navigateByUrl("home")
  }
  goToRegister(){
    this.router.navigateByUrl("registro")
  }

  async presentAlertConfirm(a:Food) {
    const alert = await this.alertController.create({
      header: `Nombre: ${a.nombre.toLocaleUpperCase()}`,
      message: `Valor por 100g <br>
     <strong>Calorías</strong>: ${a.energia}<br>
     <strong>Grasas</strong>: ${a.energia}<br>
     <strong>Carbohidratos</strong>:${a.carbohidratos}<br>
     <strong>Azucar</strong>:${a.azucar}<br>
     <strong>Fibra</strong>: ${a.fibra}<br>
     <strong>Proteina</strong>:${a.proteina}<br>
     <strong>Sal</strong>:${a.sal}<br>
     <strong>Colesteror</strong>:${a.colesterol}<br>`
      ,
buttons: [ {
          text: 'Volver',
          handler: (blah) => {
console.log('Confirm Cancel: blah');
} }]
});
    await alert.present();
  }
}
