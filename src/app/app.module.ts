import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import { LedgerComponent } from './ledger/ledger.component';
import { AddPartyComponent } from './add-party/add-party.component';
import { ViewPartyComponent } from './view-party/view-party.component';
import { LoginComponent } from './login/login.component';
import { CrateComponent } from './crate/crate.component';
import { HttpClientModule } from '@angular/common/http';
import { PartyCollectionComponent } from './party-collection/party-collection.component';
const routes: Routes = [
  { path: '', component: PurchaseComponent },
  { path: 'partyCollection-component', component: PartyCollectionComponent },
  { path: 'mainMenu-component', component: MainMenuComponent },
  { path: 'viewPurchase-component', component: ViewPurchaseComponent },
  { path: 'ledger-component', component: LedgerComponent },
  { path: 'viewParty-component', component: ViewPartyComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'crate-component', component: CrateComponent },
  { path: 'addParty-component', component: AddPartyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    MainMenuComponent,
    ViewPurchaseComponent,
    LedgerComponent,
    AddPartyComponent,
    ViewPartyComponent,
    LoginComponent,
    CrateComponent,
    PartyCollectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
