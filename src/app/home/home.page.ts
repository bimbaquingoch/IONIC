import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  elemet:screens[]=[
  {
    name:"Alertas",
    url:"/alertas",
    icon:"alarm-outline"
  },
    {
      name:"ActionSheet",
      url:"/action-sheet",
      icon:"cafe-outline"
    },{
      name:"Tarjetas",
      url:'/tarjetas',
      icon:"image-outline"
    },
    {
      name:'Deber',
      url:'/deber',
      icon:'planet-outline'
    },
    {
      name:'Nasa',
      url:'/nasa',
      icon:'planet-outline'
    }

  ]

  constructor() {}
  ngOnInit(){}

}

interface screens{
  name:string;
  url:string;
  icon:string;

}
