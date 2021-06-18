import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoreeventsComponent } from './viewmoreevents.component';

describe('ViewmoreeventsComponent', () => {
  let component: ViewmoreeventsComponent;
  let fixture: ComponentFixture<ViewmoreeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmoreeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoreeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
