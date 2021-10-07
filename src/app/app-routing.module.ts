import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { PartyCollectionComponent } from './party-collection/party-collection.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ViewPartyComponent } from './view-party/view-party.component';
import { LoginComponent } from './login/login.component';
import { CrateComponent } from './crate/crate.component';
import { AddPartyComponent } from './add-party/add-party.component';
import { SellComponent } from './sell/sell.component';
import { PurchaseComponent } from './purchase/purchase.component';
//
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
  { path: 'sell-component', component: SellComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
