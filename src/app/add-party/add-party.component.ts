import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      commission: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      starting: new FormControl(null, Validators.required),
      type: new FormControl(0, Validators.required),
    });
  }
  onSaveForm() {
    this.Party = this.projectForm.value;
    console.log(this.Party);
    this.mainService.addParty(this.Party).then((data) => {
      this._snackBar.open('Party Saves', 'Close');
    });
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    this.projectForm.reset();
  }
  async partyName(val) {
    clearTimeout(this.timer);
    this.options = [];
    this.timer = setTimeout(async () => {
      console.log(val);
      this.options = await this.mainService.autoCompleteName(
        val,
        'types=1&types=2&types=3&types=0'
      );
    }, 500);
  }
}
