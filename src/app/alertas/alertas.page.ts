import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlertMultipleButtons(){
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header:'Alert',
      subHeader:'Subtitle',
      message:'this is alert: multiple buttons',
      buttons:[{
        text:'OK',
        handler:()=>{
          console.log('OK enviado ')
        }
      },
        {
          text:"Cancel",
          role:'cancel',
          cssClass:'danger',
          handler:()=>{console.log("cancelado")}
        }]
    })
    await alert.present()
  }

  async loadForm(){
    const form=await this.alertController.create({
      cssClass:'my-custom-class',
      header:'Form',
      subHeader:'Load your data',
      message:'Fill all blank spaces',
      inputs:[
        {
          name:'txtName',
          type:'text',
          placeholder:'Here your name'
        },
        {
          name:'txtID',
          type:"number",
          placeholder:"Your identification card number"
        },
        {
          name:'txtEmail',
          type:"email",
          placeholder:'Your email'
        }

      ],
      buttons:[
        {
          text:'Send',
          handler:()=>{console.log('send successfull')}
        },
        {
          text:'Cancel',
          role:'cancel',
          cssClass:"secondary",
          handler:()=>{console.log('operation canceled')}
        }
      ]
    })
    await form.present()
  }

}
