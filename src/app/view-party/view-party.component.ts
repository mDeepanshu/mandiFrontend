import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Party } from '../models/party.model';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-party',
  templateUrl: './view-party.component.html',
  styleUrls: ['./view-party.component.css'],
})
export class ViewPartyComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}
  selectedPartyId;
  toNextElement = 2;

  ngOnInit() {
    this.mainForm = new FormGroup({
      name: new FormControl(null),
      address: new FormControl(null),
      phone: new FormControl(null),
      curr: new FormControl(null),
      start: new FormControl(),
      end: new FormControl(),
    });
    //
    setTimeout(() => {
      this.username.nativeElement.focus();
    }, 0);
  }

  public tableArr;
  options;
  public timer;
  mainForm: FormGroup;
  idArray = ['username', 'phone', 'address'];
  @ViewChild('aForm') aForm: ElementRef;
  @ViewChild('username') username: ElementRef;
  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.aForm.nativeElement[this.toNextElement].focus();
    if (this.toNextElement == 3) {
      this.toNextElement = 0;
    } else if (this.toNextElement == 0) {
      this.toNextElement += 2;
    } else {
      this.toNextElement++;
    }
  }
  print() {
    const printContent = document.getElementById('toP');
    const WindowPrt = window.open(
      '',
      '',
      'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0'
    );
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
  partyName(val) {
    clearTimeout(this.timer);
    this.options = [];
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService
        .autoCompleteName(val, 'types=0&types=2&types=3')
        .then((arr) => {
          console.log(arr);
          this.options = arr;
        });
    }, 1000);
  }
  find() {
    let ins = this.mainForm.value;
    let from = this.mainForm.value.start;
    let till = this.mainForm.value.end;
    this.mainService
      .partyHistory(
        this.selectedPartyId,
        from.getDate(),
        Number(from.getMonth()) + 1,
        from.getFullYear(),
        till.getDate(),
        Number(till.getMonth()) + 1,
        till.getFullYear()
      )
      .then((data: []) => {
        data.forEach((element: { date }) => {
          let date = new Date(element.date);
          element.date = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`;
        });
        this.tableArr = data;
      });
  }
  onPartySelect(name) {
    let obj = name.source.value;
    console.log(obj);
    this.selectedPartyId = obj._id;
    this.mainService.findParty(obj).then((data: Party) => {
      console.log(data);
      this.selectedPartyId = data._id;
      this.mainForm.patchValue({
        address: data.address,
        phone: data.phone,
        curr: data.current,
      });
    });
  }
  onSubmit() {}
  saveEdit() {
    this.mainService
      .editParty(this.mainForm.value, this.selectedPartyId)
      .then((data) => {
        console.log(data);
        this._snackBar.open('Party Edits Saved', 'Close');
      });
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    this.mainForm.reset();
  }
}
