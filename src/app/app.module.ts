import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPrintModule } from 'ngx-print';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PurchasePrintComponent } from './purchase-print/purchase-print.component';
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
import { TroublersComponent } from './troublers/troublers.component';
import { TodaysSellComponent } from './todays-sell/todays-sell.component';
import { TodaysVasuliComponent } from './todays-vasuli/todays-vasuli.component';
import { ItemsComponent } from './items/items.component';
import { MatTabsModule } from '@angular/material/tabs';

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
    TroublersComponent,
    TodaysSellComponent,
    TodaysVasuliComponent,
    ItemsComponent,
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
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
  ],
  // exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
