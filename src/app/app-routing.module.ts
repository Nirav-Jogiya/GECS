import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { VotingDashboardComponent } from './voting-dashboard/voting-dashboard.component';
import { ValuesRankingComponent } from './values-ranking/values-ranking.component';
import { GiveRankingComponent } from './give-ranking/give-ranking.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'voting-dashboard', component: VotingDashboardComponent },
  { path: 'values-ranking', component: ValuesRankingComponent },
  { path: 'give-ranking', component: GiveRankingComponent },

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
