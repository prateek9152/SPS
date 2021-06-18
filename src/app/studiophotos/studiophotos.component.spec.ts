import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiophotosComponent } from './studiophotos.component';

describe('StudiophotosComponent', () => {
  let component: StudiophotosComponent;
  let fixture: ComponentFixture<StudiophotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiophotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiophotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
