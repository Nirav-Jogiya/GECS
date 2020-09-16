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
import { ProposalsComponent } from './proposals/proposals.component';
import { VotingComponent } from './voting/voting.component';
import { RewardsComponent } from './rewards/rewards.component';
import { CreateProposalsComponent } from './create-proposals/create-proposals.component';
import { VoteSubmittedComponent } from './vote-submitted/vote-submitted.component';
import { ProposalsHistoryComponent } from './proposals-history/proposals-history.component';
import { SubmittedComponent } from './submitted/submitted.component';

import { ParticlesDirective} from './particles.directive';
import { ProposalHistoryViewComponent } from './proposal-history-view/proposal-history-view.component';
import { ProposalViewComponent } from './proposal-view/proposal-view.component';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DocumentationComponent,
    HeaderComponent,
    VotingDashboardComponent,
    ValuesRankingComponent,
    GiveRankingComponent,
    ProposalsComponent,
    VotingComponent,
    RewardsComponent,
    CreateProposalsComponent,
    VoteSubmittedComponent,
    ProposalsHistoryComponent,
    SubmittedComponent,
    ParticlesDirective,
    ProposalHistoryViewComponent,
    ProposalViewComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
