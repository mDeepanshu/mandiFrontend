import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayCollectionPrintComponent } from './today-collection-print.component';

describe('TodayCollectionPrintComponent', () => {
  let component: TodayCollectionPrintComponent;
  let fixture: ComponentFixture<TodayCollectionPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayCollectionPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayCollectionPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
