import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component0Component } from './lib0childlib8component0.component';

describe('Lib0childlib8component0Component', () => {
  let component: Lib0childlib8component0Component;
  let fixture: ComponentFixture<Lib0childlib8component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib0childlib8component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
