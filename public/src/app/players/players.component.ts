import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css']
})
export class PlayersComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['player_id'])
    });
  }

}
