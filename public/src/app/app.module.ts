import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    LeaguesComponent,
    GamesComponent,
    PlayersComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [HttpService],
  bootstrap: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    LeaguesComponent,
    GamesComponent,
    PlayersComponent,
    MainComponent
  ]
})
export class AppModule { }
