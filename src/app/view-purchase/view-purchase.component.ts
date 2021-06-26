import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseModelComponent } from '../purchase-model/purchase-model.component';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css'],
})
export class ViewPurchaseComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    public dialog: MatDialog
  ) {}
  @ViewChild('identify') myNameElem: ElementRef;
  public type: boolean = false;
  public isTypeOne: boolean = false;
  public selectby = 'two';
  public selectedId;
  public timer;
  campaignOne: FormGroup;
  options;
  tableArr;
  animal: string;
  name: string;

  placeholder = ''; //this changes when radio values changes between party and bill
  typeChange(arg) {
    this.selectby = arg;
    if (arg == 'two') {
      this.type = false;
      this.isTypeOne = false;
    } else if (arg == 'one') {
      this.type = true;
      this.isTypeOne = true;
    } else {
      this.type = true;
      this.isTypeOne = false;
    }
  }

  ngOnInit() {
    this.campaignOne = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }
  partyName(val) {
    clearTimeout(this.timer);
    this.options = [];
    this.timer = setTimeout(() => {
      console.log(val);
      if (this.selectby == 'one') {
        this.mainService
          .autoCompleteName(val, 'types=1&types=3')
          .then((arr) => {
            console.log(arr);
            this.options = arr;
          });
      } else {
        this.mainService.autocompleteBillno(val).then((arr) => {
          this.options = arr;
          console.log(arr);
        });
      }
    }, 1000);
  }
  onPartySelect(id) {
    this.selectedId = id;
  }
  search() {
    let val;
    switch (this.selectby) {
      case 'one':
        val = this.myNameElem.nativeElement.value;
        console.log(val);
        this.mainService.getBillbyParty(this.selectedId, 1).then((data) => {
          console.log(data);
        });
        break;
      case 'two':
        let from = this.campaignOne.value.start;
        let till = this.campaignOne.value.end;
        this.mainService
          .getBillbyDate(
            from.getDate(),
            Number(from.getMonth()) + 1,
            from.getFullYear(),
            till.getDate(),
            Number(till.getMonth()) + 1,
            till.getFullYear()
          )
          .then((data) => {
            console.log(data);
            this.tableArr = data;
          });
        break;
      case 'three':
        val = this.myNameElem.nativeElement.value;
        this.mainService.getBillbyNum(val);
        console.log(val);

        break;
    }
  }
  openDialog(i) {
    this.dialog.open(PurchaseModelComponent, { data: this.tableArr[i] });
  }
}
