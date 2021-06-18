import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaypartiesComponent } from './birthdayparties.component';

describe('BirthdaypartiesComponent', () => {
  let component: BirthdaypartiesComponent;
  let fixture: ComponentFixture<BirthdaypartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaypartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaypartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
