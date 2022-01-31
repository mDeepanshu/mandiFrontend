import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Purchase } from '../models/purchase.model';
import { PurchaseTable } from '../models/purchaseTable.model';
import { Party } from '../models/party.model';
import { MatSnackBar } from '@angular/material/snack-bar';
// Importing BrowserWindow from Main
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}
  purchaseForm: FormGroup;
  tableArr: PurchaseTable[] = [];
  public purchaseDetail: Purchase;
  public taxRate;
  public hammaliRate;
  public timer;
  public commRateChange = true;
  public bhadaChanged = false;
  public hammaliChanged = false;
  public bhadaCalculated;
  public hammaliCalculated;
  preHammali;
  preBhada;
  selectedId;
  isPrinting = false;
  billNumber;
  toNextElement = 1;
  @ViewChild('table') from: ElementRef;
  @ViewChild('aForm') aForm: ElementRef;
  @ViewChild('username') username: ElementRef;

  //
  public date =
    new Date().getDate() +
    '/' +
    new Date().getMonth() +
    '/' +
    new Date().getFullYear();
  //
  partyOptions;
  itemOptions;
  idArray = [
    'bhada',
    'hammali',
    'cash',
    'commission_rate',
    'bhada_rate',
    'commission',
    'Tax',
    'station_charge',
    'driver',
    'Item',
    'Bag',
    'Quantity',
    'Rate',
  ];
  //
  ngOnInit() {
    this.purchaseForm = new FormGroup({
      partyName: new FormControl(null),
      setOne: new FormGroup({
        bhada: new FormControl(0, Validators.required),
        hammali: new FormControl(0, Validators.required),
        cash: new FormControl(null, Validators.required),
        commission_rate: new FormControl(null, Validators.required),
        bhada_rate: new FormControl(null, Validators.required),
        commission: new FormControl(0, Validators.required),
        tax: new FormControl(null, Validators.required),
        station_charge: new FormControl(null, Validators.required),
        driver: new FormControl(null, Validators.required),
      }),
      setTwo: new FormGroup({
        item_name: new FormControl(),
        bag: new FormControl(2),
        quantity: new FormControl(2),
        rate: new FormControl(2),
      }),
      setThree: new FormGroup({
        to_exp: new FormControl(null),
        bill_total: new FormControl(null),
        net_amount: new FormControl(null),
      }),
    });
    //

    //
    this.mainService
      .getConstants()
      .then((data: { hammali_rate; bhada_rate; tax_rate }) => {
        this.taxRate = data.tax_rate;
        this.hammaliRate = data.hammali_rate;

        this.purchaseForm.patchValue({
          setOne: {
            bhada_rate: data.bhada_rate,
          },
        });
      });
    //
    setTimeout(() => {
      this.username.nativeElement.focus();
    }, 0);
    //
  }
  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.aForm.nativeElement[this.toNextElement].focus();
    if (this.toNextElement == 13) {
      this.toNextElement = 10;
    } else {
      this.toNextElement++;
    }
  }
  @HostListener('document:keydown.control.=', ['$event']) ctrl_cal(e) {
    e.preventDefault();
    if (this.purchaseForm.valid) {
      this.calculate();
      // console.log('asdflka');
    }
  }
  @HostListener('document:keydown.control.]', ['$event']) ctrl_snp(e) {
    e.preventDefault();
    this.resetForm();
  }
  @HostListener('document:keydown.control.[', ['$event']) ctrl_dnn(e) {
    e.preventDefault();
    this.printIt();
  }
  //
  partyName(val) {
    clearTimeout(this.timer);
    this.partyOptions = [];
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService.autoCompleteName(val, 'types=1').then((arr) => {
        console.log(arr);
        this.partyOptions = arr;
      });
    }, 500);
  }
  itemName(val) {
    clearTimeout(this.timer);
    this.itemOptions = [];
    this.timer = setTimeout(() => {
      this.mainService.autoCompleteItemName(val).then((arr) => {
        console.log('arrarrarr', arr);
        this.itemOptions = arr;
      });
    }, 500);
  }
  calculate() {
    let objOne = this.purchaseForm.value.setOne;
    let billTotal = 0;
    let totalBag = 0;

    this.tableArr.forEach((element) => {
      billTotal =
        Number(billTotal) +
        Math.round(Number(element.quantity) * Number(element.rate));
      totalBag = Number(totalBag) + Number(element.bag);
    });
    console.log(objOne.commission_rate, billTotal);
    this.hammaliCalculated = Math.round(totalBag * this.hammaliRate);
    this.bhadaCalculated = Math.round(totalBag * objOne.bhada_rate);
    this.purchaseForm.patchValue({
      setOne: {
        hammali: this.hammaliCalculated,
        bhada: this.bhadaCalculated,
        tax: Math.round(totalBag * this.taxRate),
        commission: Math.round((objOne.commission_rate / 100) * billTotal),
      },
    });
    let total_exp =
      this.bhadaCalculated +
      Math.round((objOne.commission_rate / 100) * billTotal) +
      objOne.driver +
      objOne.station_charge +
      this.hammaliCalculated +
      Math.round(totalBag * this.taxRate) +
      objOne.cash;
    this.purchaseForm.patchValue({
      setThree: {
        bill_total: billTotal,
        to_exp: total_exp,
        net_amount: billTotal - total_exp,
      },
    });
  }
  addNew() {
    this.tableArr.push(this.purchaseForm.value.setTwo);
  }
  onSubmit() {
    this.purchaseDetail = this.purchaseForm.value.setOne;
    this.purchaseDetail.items = this.tableArr;
    let obj = {
      bill_no: '',
      date: new Date(),
      partyId: this.selectedId,
    };
    Object.assign(obj, this.purchaseDetail);
    Object.assign(obj, this.purchaseForm.value.setThree);
    obj.bill_no = Date.now().toString(36);
    console.log(obj);
    // this.mainService.addPurchase(obj).then((data) => {
    //   this._snackBar.open('Purchase Saved', 'Close');
    // });
    this.printIt();
  }
  onPartySelect(name, id) {
    console.log(name.source.value);
    this.selectedId = id;
    console.log(id);

    this.mainService.findParty(name.source.value).then((data: Party) => {
      console.log(data.commission);

      this.purchaseForm.patchValue({
        setOne: {
          commission_rate: data.commission,
        },
      });
    });
  }
  onItemSelect(name, id) {
    // this.selectedId = id;
    // this.mainService.getItem(name.source.value).then((data: Party) => {
    //   this.purchaseForm.patchValue({
    //     setOne: {
    //       commission_rate: data.commission,
    //     },
    //   });
    // });
  }
  removeItem(i) {
    console.log(i);
    delete this.tableArr[i];
    this.tableArr.splice(i, 1);
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    this.purchaseForm.reset();
  }
  onCommRateChange() {
    if (this.purchaseForm.value.setOne.commission_rate != 0) {
      this.commRateChange = false;
      console.log(this.purchaseForm.value.setOne.commission_rate);
    } else {
      this.commRateChange = true;
      console.log(this.purchaseForm.value.setOne.commission_rate);
    }
  }
  constChange(r) {
    let amount;
    let toMinus;
    if (r == 'hammali') {
      amount = this.purchaseForm.value.setOne.hammali;
      toMinus = this.preHammali;
      this.preHammali = amount;
      if (amount === this.hammaliCalculated) {
        this.hammaliChanged = false;
      } else {
        this.hammaliChanged = true;
      }
    }
    if (r == 'bhada') {
      amount = this.purchaseForm.value.setOne.bhada;
      toMinus = this.preBhada;
      this.preBhada = amount;
      if (amount === this.bhadaCalculated) {
        this.bhadaChanged = false;
      } else {
        this.bhadaChanged = true;
      }
    }
    this.makeChan(amount - toMinus);
  }
  printIt() {
    // this.isPrinting = true;
    this.mainService.temp = 'AA';
    this.mainService.tempArr = this.tableArr;
    this.mainService.tempObj = this.purchaseForm.value;
    // this.mainService.DataToPrint.next({
    //   arr: this.tableArr,
    //   obj: this.purchaseForm.value,
    // });
    this.mainService.purchasePrint.next('purchasePrint');
    setTimeout(() => {
      window.print();
    }, 0);
  }
  makeChan(amount) {
    let rep = this.purchaseForm.value.setThree;
    console.log(amount, rep);
    this.purchaseForm.patchValue({
      setThree: {
        bill_total: rep.bill_total + amount,
        to_exp: rep.to_exp + amount,
        net_amount: rep.net_amount + amount,
      },
    });
  }
  //
  //
}
