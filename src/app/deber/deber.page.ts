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

  names :any [] = [];

  constructor(private rickandmortyservice:RickandmortyService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.rickandmortyservice.getInfo().then((newinfo)=>{
      this.names = newinfo.results;
     // console.log(this.names);
    })
  }
}


