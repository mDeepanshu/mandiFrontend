import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysSellComponent } from './todays-sell.component';

describe('TodaysSellComponent', () => {
  let component: TodaysSellComponent;
  let fixture: ComponentFixture<TodaysSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
