import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component0Component } from './lib4childlib3component0.component';

describe('Lib4childlib3component0Component', () => {
  let component: Lib4childlib3component0Component;
  let fixture: ComponentFixture<Lib4childlib3component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4childlib3component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
