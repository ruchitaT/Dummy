import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import  { Router } from "@angular/router";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {

breedsWithDetail: any = [];
filterText:any;
  constructor(private apiManager: ApiServiceService,  private router: Router) { }

  ngOnInit() {
    this.getDetailData();
  }

getDetailData(){
  if(this.apiManager.selectedBreed.length){
    this.apiManager.selectedBreed.forEach(obj=>{
      this.getImage(obj, "breed/"+this.apiManager.subBreed+"/"+obj+"/images/random");
    });
  }else{
    this.getImage(this.apiManager.subBreed,"breed/"+this.apiManager.subBreed+"/images/random");
    }
  }

getImage(breedName,params){
  this.apiManager.getBreedData(params).then((result:any)=>{
    this.breedsWithDetail.push({
    breed:breedName,
    image:JSON.parse(result.data).message
  })
  }).catch((error:any)=>{
    console.log("error "+JSON.stringify(error))
  })
}
}
