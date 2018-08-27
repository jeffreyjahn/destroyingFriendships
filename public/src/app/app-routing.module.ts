import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { PlayersComponent } from './players/players.component';
import { GamesComponent } from './games/games.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path : '', component: HomeComponent, children:[
    { path : '', component: InfoComponent },
    { path :'main', component: MainComponent },
    { path : 'games/:game_id', component: GamesComponent },
    { path : 'leagues/:league_id', component: LeaguesComponent },
    { path : 'players/:player_id', component: PlayersComponent }
  ] },
  { path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
