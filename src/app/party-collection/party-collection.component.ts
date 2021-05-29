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
  public date =
    new Date().getDate() +
    '/' +
    new Date().getMonth() +
    '/' +
    new Date().getFullYear();

  ngOnInit() {}
  public timer;
  options;
  remaining;
  partyName(val) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService.autoCompleteName(val, 0).then((arr) => {
        console.log(arr);
        this.options = arr;
      });
    }, 1000);
  }
  //
  onSubmit(val) {
    console.log(val);

    // this.purchaseDetail = this.purchaseForm.value.setOne;
    // this.purchaseDetail.items = this.tableArr;
    // console.log(this.purchaseDetail);
  }
  onPartySelect(name) {
    console.log(name.source.value);

    this.mainService.findParty(name.source.value).then((data: Party) => {
      // console.log(data.commission);
      this.remaining = data.current;
    });
  }
}
