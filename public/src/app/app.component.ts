import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Destroying Friendships';

  constructor(private _httpService:HttpService){}
  allLeagues: any;

  ngOnInit(){
    this.allLeagues = [];
    this.getAllLeaguesFromService();
  }
  getAllLeaguesFromService(){
    this._httpService.getAllLeagues()
      .subscribe(data=>{
        console.log("Getting all cakes!", data);
        this.allLeagues = data;
      })
  }
}
