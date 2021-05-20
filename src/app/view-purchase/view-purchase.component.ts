import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css'],
})
export class ViewPurchaseComponent implements OnInit {
  constructor() {}

  public type: boolean = false;
  placeholder = '';
  typeChange(arg) {
    console.log('ASdfasf');
    if (arg == 'two') {
      this.type = false;
    } else if (arg == 'one') {
      this.placeholder = 'Party Name';
      this.type = true;
    } else {
      this.placeholder = 'Bill Number';
      this.type = true;
    }
  }

  ngOnInit(): void {}
}
