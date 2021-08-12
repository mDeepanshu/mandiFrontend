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
import { NgxPrintModule } from 'ngx-print';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SellComponent } from './sell/sell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { PurchaseModelComponent } from './purchase-model/purchase-model.component';
import { ErrMsgModuleComponent } from './err-msg-module/err-msg-module.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PurchasePrintComponent } from './purchase-print/purchase-print.component';

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
    SellComponent,
    PurchaseModelComponent,
    ErrMsgModuleComponent,
    SaveDialogComponent,
    PurchasePrintComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxPrintModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
