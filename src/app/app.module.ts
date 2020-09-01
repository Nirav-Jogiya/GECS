import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HeaderComponent } from './header/header.component';
import { VotingDashboardComponent } from './voting-dashboard/voting-dashboard.component';
import { ValuesRankingComponent } from './values-ranking/values-ranking.component';
import { GiveRankingComponent } from './give-ranking/give-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DocumentationComponent,
    HeaderComponent,
    VotingDashboardComponent,
    ValuesRankingComponent,
    GiveRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
