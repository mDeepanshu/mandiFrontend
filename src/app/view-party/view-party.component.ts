import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-party',
  templateUrl: './view-party.component.html',
  styleUrls: ['./view-party.component.css'],
})
export class ViewPartyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  print() {
    const printContent = document.getElementById('toP');
    const WindowPrt = window.open(
      '',
      '',
      'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0'
    );
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
}
