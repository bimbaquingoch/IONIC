import { Injectable } from '@angular/core';
const API = "https://rickandmortyapi.com/api/character/?page=5";

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor() { }
  getInfo(){
    return fetch(API).then( response => response.json());
  }
}
