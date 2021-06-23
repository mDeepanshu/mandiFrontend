import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Party } from '../models/party.model';

@Component({
  selector: 'app-party-collection',
  templateUrl: './party-collection.component.html',
  styleUrls: ['./party-collection.component.css'],
})
export class PartyCollectionComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  public date = new Date();

  ngOnInit() {}
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
    this.mainService.addVasuli(this.selectedPartyId, amount, this.date);
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    // this.purchaseForm.reset();
  }
}
