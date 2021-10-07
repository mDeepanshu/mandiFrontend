import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  date = new Date();
  expired = false;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    const d = new Date();
    d.setMonth(9);
    d.setDate(30);
    if (d.getTime() - this.date.getTime() <= 0) {
      this.expired = true;
      this._snackBar.open('Date Expired', 'Close');
    } else if (d.getTime() - this.date.getTime() < 1296011173) {
      this._snackBar.open('Software about to Expire', 'Close');
    }
  }
}
