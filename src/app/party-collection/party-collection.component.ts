import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Party } from '../models/party.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-party-collection',
  templateUrl: './party-collection.component.html',
  styleUrls: ['./party-collection.component.css'],
})
export class PartyCollectionComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}
  public date = new Date();
  isPrinting = false;
  dateToShow = Date().toString().substring(0, 15);
  form: FormGroup;
  sendSMS = true;
  ngOnInit() {
    this.form = new FormGroup({
      party_name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
    });
  }
  public timer;
  options;
  remaining;
  selectedPartyId;
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
  //
  sendSMSStatus() {
    this.sendSMS = !this.sendSMS;
  }
  onPartySelect(name, id) {
    console.log(name.source.value);
    this.selectedPartyId = id;
    console.log(id);

    this.mainService.findParty(name.source.value).then((data: Party) => {
      // console.log(data.commission);
      this.remaining = data.current;
    });
  }
  onSave(amount) {
    this.mainService
      .addVasuli(this.selectedPartyId, amount, this.date)
      .then((data) => {
        this.remaining = this.remaining - amount;
        this._snackBar.open('Transaction Saved', 'Close');
      });
    if (this.sendSMS) {
      this.mainService.sendSMS().then((data) => {
        console.log('Msg sent', data);
      });
    }
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    this.form.reset();
  }
  printIt() {
    this.mainService.purchasePrint.next('partyCollection');
    setTimeout(() => {
      window.print();
    }, 0);
  }
}
