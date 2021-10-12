import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  projectForm: FormGroup;
  items;
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      itemname: new FormControl(null, Validators.required),
      // address: new FormControl(null, Validators.required),
    });
  }
  onSaveForm() {
    // this.Party = this.projectForm.value;
    // this.mainService.addParty(this.projectForm.value.itemname).then((data) => {
    //   this._snackBar.open('Item Saved', 'Close');
    // });
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    this.projectForm.reset();
  }
  itemName(a) {}
}
