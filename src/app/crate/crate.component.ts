import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-crate',
  templateUrl: './crate.component.html',
  styleUrls: ['./crate.component.css'],
})
export class CrateComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  options;
  public timer;

  ngOnInit(): void {}
  partyName(val) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService.crateAutoCompleteName(val, 0).then((arr) => {
        console.log(arr);
        this.options = arr;
      });
    }, 1000);
  }
}
