import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-todays-sell',
  templateUrl: './todays-sell.component.html',
  styleUrls: ['./todays-sell.component.css'],
})
export class TodaysSellComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  list;
  isPrinting = false;
  public timer;
  itemOptions;
  // @ViewChild('itemnameRef', { static: true }) itemnameRef: ElementRef;

  ngOnInit() {
    // setTimeout(() => {
    //   this.itemnameRef.nativeElement.focus();
    // }, 0);
  }
  get_item_Sell(itemname) {
    this.mainService.getTodaysItem(itemname).then((data) => {
      this.list = data;
    });
  }
  itemName(val) {
    clearTimeout(this.timer);
    this.itemOptions = [];
    this.timer = setTimeout(async () => {
      this.itemOptions = await this.mainService.autoCompleteItemName(val);
    }, 500);
  }
  printIt() {
    this.mainService.purchasePrint.next(true);
    this.isPrinting = true;
    setTimeout(() => {
      window.print();
    }, 0);
    setTimeout(() => {
      this.mainService.purchasePrint.next(false);
      this.isPrinting = false;
    }, 0);
  }
}
