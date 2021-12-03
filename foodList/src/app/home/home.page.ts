
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Food } from '../model/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
alimentos:Food[] = []
alimento:Food = {
    id:null
}

esDesplegado:boolean = false

constructor(private foodService:FoodService,
  public alertController:AlertController,
  public router:Router){}

  ngOnInit(): void {
    this.foodService.getFoods().subscribe(data => this.alimentos = data)
  }

  getAlimento(id:number){
    this.alimento = this.alimentos.filter(data => data.id == id)[0]
  }

  cambiarEsDesplegado(){
    if(this.esDesplegado == false){
      this.esDesplegado = true
    }else{
      this.esDesplegado= false
    }
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
} } ]
});
    await alert.present();
  }

  guardarFavorito(fav:Food){
    this.foodService.saveFav(fav)
  }

  goToFav(){
    this.router.navigateByUrl("/fav")
  }
  goToUser(){
    this.router.navigateByUrl("/usuario")
  }
  goToRegister(){
    this.router.navigateByUrl("/registro")
  }


}
