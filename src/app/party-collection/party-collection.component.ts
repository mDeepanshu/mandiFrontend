import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party-collection',
  templateUrl: './party-collection.component.html',
  styleUrls: ['./party-collection.component.css'],
})
export class PartyCollectionComponent implements OnInit {
  constructor() {}
  public date =
    new Date().getDate() +
    '/' +
    new Date().getMonth() +
    '/' +
    new Date().getFullYear();

  ngOnInit(): void {}
}
