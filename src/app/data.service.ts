import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Post } from './Post'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('Service is working')
   }

   getData() {
    // return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')

  //   let timeStamp=  Date.now();
  //   const publicKey="64be1956400c447a070fadcf00d7dbd8";


    //http://gateway.marvel.com/v1/public/characters?ts=1&apikey=64be1956400c447a070fadcf00d7dbd8&hash=b66170da1509214baf52393b00845b68

    //18196b43a93a487a8a955c451532e76436e31ed5564be1956400c447a070fadcf00d7dbd8 ===== hash: b66170da1509214baf52393b00845b68


  //   const baseUrl= "http://gateway.marvel.com/v1/public/characters";

  //   console.log("timestamp ====" + timeStamp)

    return this.httpClient.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=64be1956400c447a070fadcf00d7dbd8&hash=b66170da1509214baf52393b00845b68")
    
    // {
    //   params: {
    //     limit: 50,
    //     ts: Date.now(),
    //     apikey: "64be1956400c447a070fadcf00d7dbd8" 
    //   }
    // }).then(function(response){
    //   const charInfoArr=response.data.data.results;
    //   return response.data.data.results.map(function(item){
        
    //     return item.name;
    //   });
    // });

   }
}
