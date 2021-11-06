import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  date = new Date();
  expired = false;
  onLink = 0;
  onElement = 0;
  @ViewChild('aForm') aForm: ElementRef;
  constructor(private _snackBar: MatSnackBar, private router: Router) {}
  routesArray = [
    '',
    'ledger-component',
    'addParty-component',
    'crate-component',
    'partyCollection-component',
    'viewParty-component',
    'viewPurchase-component',
    'sell-component',
    'TroublersComponent',
    'TodaysSellComponent',
    'TodaysVasuliComponent',
    'ItemsComponent',
  ];
  capital = [
    'PURCHASE',
    'LEDGER',
    'ADD PARTY',
    'CRATE',
    'PARTY COLLECTION',
    'VIEW PARTY',
    'VIEW PURCHASE',
    'SELL',
    'TROUBLERS',
    'TODAYS SELL',
    'TODAYS VASULI',
    'ITEMS',
  ];
  ngOnInit() {
    const d = new Date();
    d.setMonth(11);
    d.setDate(30);
    if (d.getTime() - this.date.getTime() <= 0) {
      this.expired = true;
      this._snackBar.open('Date Expired', 'Close');
    } else if (d.getTime() - this.date.getTime() < 1296011173) {
      this._snackBar.open('Software about to Expire', 'Close');
    }
  }
  //
  @HostListener('document:keydown.tab', ['$event'])
  onKeyDown(e) {
    e.preventDefault();
    if (this.onElement == 11) {
      this.onElement = 0;
      this.onLink = 0;
    } else {
      this.onElement++;
      this.onLink++;
    }
    this.router.navigate([`${this.routesArray[this.onElement]}`]);
  }
  //
  @HostListener('document:keydown.shift.tab', ['$event'])
  onShiftTab(e) {
    e.preventDefault();
    console.log(this.onElement);
    if (this.onElement == 0) {
      this.onElement = 11;
      this.onLink = 11;
    } else {
      this.onElement--;
      this.onLink--;
    }
    this.router.navigate([`${this.routesArray[this.onElement--]}`]);
  }
  //
  linkChange(r) {
    this.onLink = r;
  }
  //
}
