import { Component, OnInit } from '@angular/core';
import {NASAService} from '../services/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.page.html',
  styleUrls: ['./nasa.page.scss'],
})
export class NasaPage implements OnInit {

  marte:any []=[]

  constructor( private nasa:NASAService ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.nasa.getInfo().then((informacion)=>{
      this.marte = informacion.photos
    })
    
  }

}
