import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySellPrintComponent } from './today-sell-print.component';

describe('TodaySellPrintComponent', () => {
  let component: TodaySellPrintComponent;
  let fixture: ComponentFixture<TodaySellPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaySellPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySellPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
