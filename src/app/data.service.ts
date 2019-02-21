import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('Service is working')
   }

   getData() {
    return this.httpClient.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=64be1956400c447a070fadcf00d7dbd8&hash=b66170da1509214baf52393b00845b68")


   }
}
