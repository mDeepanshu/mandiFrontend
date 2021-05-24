import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { Party } from '../models/party.model';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.css'],
})
export class AddPartyComponent implements OnInit {
  projectForm: FormGroup;
  Party: Party;
  constructor(private mainService: MainServiceService) {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      commission: new FormControl(),
      phone: new FormControl(),
      starting: new FormControl(),
      type: new FormControl(),
    });
  }
  onSaveForm() {
    this.Party = this.projectForm.value;
    console.log(this.Party);
    this.mainService.addParty(this.Party);
  }
}
