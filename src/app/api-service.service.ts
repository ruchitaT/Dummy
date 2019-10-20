import { Injectable } from '@angular/core';
//import { Platform, Events } from '@ionic-angular';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string="https://dog.ceo/api/";
  subBreed:any;
  selectedBreed:any;

  constructor(public http: HTTP) {
    this.http.setRequestTimeout(300);
  }

  public makeGetRequest(url) {
    return new Promise((resolve, reject) => {
      this.http.get(encodeURI(this.url + url), {}, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  getAllBreedList(){
    //this.url = "https://dog.ceo/api/breeds/list/all";
  return new Promise((resolve, reject) => {
    this.makeGetRequest("breeds/list/all").then((result) => {
      resolve(result);
    }).catch((error) => {
      reject(error);
    });
  })
  }


getBreedData(url){
  //let imgUrl = "breed/"+breed+"/images"
  return new Promise((resolve, reject) => {
    this.makeGetRequest(url).then((result) => {
      resolve(result);
    }).catch((error) => {
      reject(error);
    });
  })
}
}
