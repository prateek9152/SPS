import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreweddingshootComponent } from './preweddingshoot.component';

describe('PreweddingshootComponent', () => {
  let component: PreweddingshootComponent;
  let fixture: ComponentFixture<PreweddingshootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreweddingshootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreweddingshootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
