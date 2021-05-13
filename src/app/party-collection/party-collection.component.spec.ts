import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCollectionComponent } from './party-collection.component';

describe('PartyCollectionComponent', () => {
  let component: PartyCollectionComponent;
  let fixture: ComponentFixture<PartyCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
