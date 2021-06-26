import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-err-msg-module',
  templateUrl: './err-msg-module.component.html',
  styleUrls: ['./err-msg-module.component.css'],
})
export class ErrMsgModuleComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public mainService: MainServiceService
  ) {}
  toShow: string;
  ngOnInit() {
    this.mainService.isErr.subscribe((message) => {
      this.toShow = message;
    });
  }
}
