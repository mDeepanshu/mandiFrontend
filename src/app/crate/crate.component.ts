import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crate',
  templateUrl: './crate.component.html',
  styleUrls: ['./crate.component.css'],
})
export class CrateComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}
  options;
  public timer;
  projectForm: FormGroup;
  selected = 0;
  selectedTab;
  selectedId;
  collectOrLend = 'COLLECT';
  tableArr;
  dataCurrent: { type1: number; type2: number; type3: number } = {
    type1: -1,
    type2: -1,
    type3: -1,
  };
  onTabNum = 0;
  date = new Date();
  @ViewChild('aForm') aForm: ElementRef;
  @ViewChild('username') username0: ElementRef;
  @ViewChild('usernameo') username1: ElementRef;
  @ViewChild('username2') username2: ElementRef;
  elemArr = ['username0', 'username1', 'username2'];
  toNextElement = 0;
  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(),
      type: new FormControl(),
    });
    setTimeout(() => {
      this.username0.nativeElement.focus();
    }, 0);
  }

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(e) {
    this.aForm.nativeElement[this.toNextElement].focus();
    if (this.toNextElement == 5) {
      this.toNextElement = 0;
    } else {
      this.toNextElement++;
    }
  }
  @HostListener('document:keydown.control./', ['$event']) ctrlRi(e) {
    console.log('right arrow');
    if (this.selected == 2) {
      this.selected = 0;
      setTimeout(() => {
        this.username0.nativeElement.focus();
      }, 0);
    } else {
      this.selected++;
      setTimeout(() => {
        this[this.elemArr[this.selected]].nativeElement.focus();
      }, 0);
    }
  }
  partyName(val) {
    clearTimeout(this.timer);
    this.options = [];
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService.crateAutoCompleteName(val).then((arr) => {
        console.log(arr);
        this.options = arr;
      });
    }, 1000);
  }
  onSaveForm(form: NgForm) {
    let obj = {
      name: form.value.partyName,
      type1: form.value.typeOne,
      type2: form.value.typeTwo,
      type3: form.value.typeThree,
    };
    this.mainService.addCrateParty(obj).then((data) => {
      this._snackBar.open('Crate Party Added', 'Close');
    });
  }
  collect(form: NgForm) {
    let obj = form.value;
    obj.partyId = this.selectedId;
    obj.date = this.date;
    if (this.selectedTab === 'LEND') {
      obj.count = -1 * obj.count;
    }
    console.log(obj);

    this.mainService.newCrateTransaction(obj).then((data) => {
      this._snackBar.open('Transaction Added', 'Close');
    });
  }
  onTab(e) {
    this.selectedTab = e;
    this.collectOrLend = e;
  }
  onPartySelect(id) {
    this.selectedId = id;
    console.log(id);
  }
  find(val) {
    let date = val.datepicker._model.selection;
    this.mainService
      .getCrateTransaction(
        this.selectedId,
        date.getDate(),
        date.getMonth() + 1,
        date.getFullYear()
      )
      .then(
        (data: {
          current: { type1: number; type2: number; type3: number };
          transactions: [];
        }) => {
          this.tableArr = data.transactions;
          this.dataCurrent = data.current;
        }
      );
  }
  toggleCng() {}
}
