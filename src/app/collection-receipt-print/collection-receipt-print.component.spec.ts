import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionReceiptPrintComponent } from './collection-receipt-print.component';

describe('CollectionReceiptPrintComponent', () => {
  let component: CollectionReceiptPrintComponent;
  let fixture: ComponentFixture<CollectionReceiptPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionReceiptPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionReceiptPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
