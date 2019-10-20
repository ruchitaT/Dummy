import { Component } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import {DetailViewPage} from '../detail-view/detail-view.page';
import  { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  breedList:any = [];
  breedData:any;

  constructor(private apiManager: ApiServiceService, private router: Router) {}

ionViewWillEnter(){
  this.getBreedsList();
}

  getBreedsList()
  {
    this.apiManager.getAllBreedList().then((result:any)=>{
      this.breedList = Object.keys(JSON.parse(result.data).message);
      this.breedData = JSON.parse(result.data).message;
    }).catch((error:any)=>{
      console.log("error"+JSON.stringify(error));
    })
  }

  onBreedSelection(key){
    let subBreeds = this.breedData[key];
      this.apiManager.subBreed = key;
      this.apiManager.selectedBreed = subBreeds;
      this.router.navigate(['/detail-view']);
  }


}
