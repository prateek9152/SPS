import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreweddingfunctionComponent } from './preweddingfunction.component';

describe('PreweddingfunctionComponent', () => {
  let component: PreweddingfunctionComponent;
  let fixture: ComponentFixture<PreweddingfunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreweddingfunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreweddingfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
