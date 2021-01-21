import { Component, OnInit } from '@angular/core';
import {RickandmortyService} from '../services/rickandmorty.service';
// const fetchData = require ('./utils/fetchData')

// const API = "https://rickandmortyapi.com/api/character/";

@Component({
  selector: 'app-deber',
  templateUrl: './deber.page.html',
  styleUrls: ['./deber.page.scss'],
})
export class DeberPage implements OnInit {

  personajes :any [] = [];

  constructor(private rickandmortyservice:RickandmortyService) { }

  ngOnInit() {
  }

  // se ejecuta una vez que se ha ejecutado el constructor
  ionViewDidEnter(){
    this.rickandmortyservice.getInfo().then((newinfo)=>{
      this.personajes = newinfo.results;
     // console.log(this.names);
    })
  }
}


