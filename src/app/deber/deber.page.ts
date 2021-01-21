import { Component, OnInit } from '@angular/core';
const fetchData = require ('./utils/fetchData.js')

const API = "https://rickandmortyapi.com/api/character/";

@Component({
  selector: 'app-deber',
  templateUrl: './deber.page.html',
  styleUrls: ['./deber.page.scss'],
})
export class DeberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
const consultApi= async (urlApi)=>{
  try {
      const data = await fetchData(urlApi)
      const name = await fetchData(`${API}${data.results[0].id}`)
      const origen = await fetchData(name.origen.url);      
    console.log(origen.dimension)
  } catch (error) {
     console.error(error) 
  }
}

consultApi(API);
