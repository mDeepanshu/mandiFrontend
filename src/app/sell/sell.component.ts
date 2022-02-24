import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { Party } from '../models/party.model';
import { SellTransaction } from '../models/sellTransaction.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}
  public tableArr: Array<{ id: string; amount: number; partyName: string }> =
    [];
  sellForm: FormGroup;
  public timer;
  public options: string[] = [];
  selectedId;
  itemOptions;
  toNextElement = 1;
  @ViewChild('table') from: ElementRef;
  @ViewChild('itemname') itemname: ElementRef;
  @ViewChild('aForm') aForm: ElementRef;

  idArary = ['Item', 'partyName', 'amount'];
  public date =
    new Date().getDate() +
    '/' +
    new Date().getMonth() +
    '/' +
    new Date().getFullYear();

  ngOnInit() {
    this.sellForm = new FormGroup({
      item_name: new FormControl(null),
      amount: new FormControl(null),
      name: new FormControl(null),
    });
    setTimeout(() => {
      this.itemname.nativeElement.focus();
    }, 0);
  }

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.aForm.nativeElement[this.toNextElement].focus();
    if (this.toNextElement == 2) {
      this.toNextElement = 0;
    } else {
      this.toNextElement++;
    }
  }

  addNew() {
    console.log(this.sellForm.value);
    this.tableArr.push({
      id: this.selectedId,
      amount: this.sellForm.value.amount,
      partyName: this.sellForm.value.name,
    });
  }

  itemName(val) {
    clearTimeout(this.timer);
    this.itemOptions = [];
    this.timer = setTimeout(async () => {
      this.itemOptions = await this.mainService.autoCompleteItemName(val);
    }, 500);
  }
  //

  partyName(val) {
    console.log(this.options);

    clearTimeout(this.timer);
    this.options = [];
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService
        .autoCompleteName(val, 'types=0&types=2&types=3')
        .then((arr: { name: string }[]) => {
          console.log(this.options);
          arr.forEach((element) => {
            console.log(this.options);
            this.options.push(element.name);
          });
        });
    }, 1000);
  }
  onPartySelect(name) {
    this.mainService.findParty(name.source.value).then((data: Party) => {
      console.log(data);
      this.selectedId = data._id;
    });
  }

  removeItem(i) {
    console.log(i);
    delete this.tableArr[i];
    this.tableArr.splice(i, 1);
  }
  save() {
    let obj: SellTransaction = this.sellForm.value;
    console.log(obj);

    obj.parties = this.tableArr;
    console.log(this.tableArr);
    console.log(obj);

    obj.date = new Date();

    this.mainService.sellTransaction(obj).then((data) => {
      this._snackBar.open('Sell Transaction Saved', 'Close');
      console.log(data);
    });
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    this.sellForm.reset();
  }
}
