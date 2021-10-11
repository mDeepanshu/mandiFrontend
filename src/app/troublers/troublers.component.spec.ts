import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroublersComponent } from './troublers.component';

describe('TroublersComponent', () => {
  let component: TroublersComponent;
  let fixture: ComponentFixture<TroublersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroublersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroublersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
