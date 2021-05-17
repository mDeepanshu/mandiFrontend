import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.css'],
})
export class AddPartyComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private mainService: MainServiceService) {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      commission: new FormControl(),
      phone: new FormControl(),
      balance: new FormControl(),
      radioOption: new FormControl(),
    });
  }
  onSaveForm() {
    console.log(this.projectForm.value);
    // this.mainService.addParty(this.projectForm.value);
  }
}
