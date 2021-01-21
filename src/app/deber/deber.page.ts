import { Component, OnInit } from '@angular/core';
import {RickandmortyService} from '../services/rickandmorty.service';
// const fetchData = require ('./utils/fetchData')

const API = "https://rickandmortyapi.com/api/character/";

@Component({
  selector: 'app-deber',
  templateUrl: './deber.page.html',
  styleUrls: ['./deber.page.scss'],
})
export class DeberPage implements OnInit {

  caracter=[{},{}]

  constructor(private rickandmortyservice:RickandmortyService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.rickandmortyservice.getInfo().then((newinfo)=>{
      for (let i = 0; i <20 ; i++) {

        this.caracter = newinfo.results[i].name;
        var origin = newinfo.results[i].origin.name;
        var gender = newinfo.results[i].gender;
        var specie = newinfo.results[i].species;
        console.log(this.caracter);
        console.log(origin)
        console.log(gender)
        console.log(specie)

      }
    })
  }
}

