import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { Party } from '../models/party.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.css'],
})
export class AddPartyComponent implements OnInit {
  projectForm: FormGroup;
  Party: Party;
  options;
  public timer;
  radioValue = [1, 2, 3, 4];
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      commission: new FormControl(),
      phone: new FormControl(),
      starting: new FormControl(),
      type: new FormControl(0),
    });
  }
  onSaveForm() {
    this.Party = this.projectForm.value;
    console.log(this.Party);
    let res = this.mainService.addParty(this.Party);
    console.log(res);
    this._snackBar.open('Party Saves', 'Close');
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    this.projectForm.reset();
  }
  partyName(val) {
    clearTimeout(this.timer);
    this.options = [];
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService.autoCompleteName(val, 'types=1').then((arr) => {
        console.log(arr);
        this.options = arr;
      });
    }, 500);
  }
}
