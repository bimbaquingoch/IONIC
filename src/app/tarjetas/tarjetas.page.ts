import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {title} from 'process';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {

  newObjets:dataImg[]=[
  {
    img:'/assets/img/shanks.jpg',
    alt:'Akagami no Shanks',
    label:"Akagami no Shanks"
  },
  {
    img:'/assets/img/law.jpg',
    alt:'Trafalgar D Walter Law',
    label:"Trafalgar D Walter Law"
  },
  {
    img:'/assets/img/luffy.jpg',
    alt:'Monkey D Luffy',
    label:"Monkey D Luffy"
  },
  ]

  cards:card[]=[
    {
      img:'/assets/img/zoro.jpg',
      alt:'Roronoa Zoro',
      title:'Roronoa Zoro',
      subtitle:"Zoro",
      content:'Espadachin de la tripulacion del sombrero de paja'
    },
    {
      img:'/assets/img/luffy.jpg',
      alt:'Roronoa Zoro',
      title:'Roronoa Zoro',
      subtitle:"Zoro",
      content:'Espadachin de la tripulacion del sombrero de paja'
    },
    {
      img:'/assets/img/shanks.jpg',
      alt:'Roronoa Zoro',
      title:'Roronoa Zoro',
      subtitle:"Zoro",
      content:'Espadachin de la tripulacion del sombrero de paja'
    },
  ]

  constructor(private alert:AlertController) { }

  ngOnInit() {
  }

  async person(){
    const flagAlert = await this.alert.create({
      cssClass:'my-custom-class',
      header:`Person`,
      message:'hola',
      buttons:['OK']
    })
    await flagAlert.present()
  }

}
 
interface dataImg{
  img:string;
  alt:string;
  label:string;
}

interface card{
  img:string;
  alt:string;
  title:string;
  subtitle:string;
  content:string;
} 
