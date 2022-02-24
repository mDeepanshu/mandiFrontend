import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
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
  toNextElement = 0;
  @ViewChild('aForm') aForm: ElementRef;
  @ViewChild('inlineRadio1') inlineRadio1: ElementRef;

  idArray = [
    'inlineRadio1',
    'inlineRadio2',
    'inlineRadio3',
    'inlineRadio4',
    'username',
    'address',
    'commission',
    'phone',
    'starting',
  ];
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
      type: new FormControl(1, Validators.required),
    });
    //
    setTimeout(() => {
      this.inlineRadio1.nativeElement.focus();
    }, 0);
  }
  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.aForm.nativeElement[this.toNextElement].focus();
    if (this.toNextElement < 4) {
      this.toNextElement = 4;
    } else if (this.toNextElement == 9) {
      this.toNextElement = 0;
    } else {
      this.toNextElement++;
    }
  }
  onSaveForm() {
    this.Party = this.projectForm.value;
    console.log(this.Party);
    this.mainService.addParty(this.Party).then((data) => {
      this._snackBar.open('Party Saved', 'Close');
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
