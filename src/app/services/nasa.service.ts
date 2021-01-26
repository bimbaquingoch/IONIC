import { Injectable } from '@angular/core';
const API ='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=dHwwXTTRpBnIbiU55Q71KXSRimGMAhvTvAlK7Nva';

@Injectable({
  providedIn: 'root'
})
export class NASAService {

  constructor() { }
  getInfo(){
    return fetch(API).then(response => response.json());
  }

}
