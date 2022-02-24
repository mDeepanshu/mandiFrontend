import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysVasuliComponent } from './todays-vasuli.component';

describe('TodaysVasuliComponent', () => {
  let component: TodaysVasuliComponent;
  let fixture: ComponentFixture<TodaysVasuliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysVasuliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysVasuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
