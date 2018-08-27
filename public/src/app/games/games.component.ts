import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css']
})
export class GamesComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['game_id'])
    });
  }

}
