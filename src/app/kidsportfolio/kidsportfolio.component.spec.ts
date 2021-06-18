import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsportfolioComponent } from './kidsportfolio.component';

describe('KidsportfolioComponent', () => {
  let component: KidsportfolioComponent;
  let fixture: ComponentFixture<KidsportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
