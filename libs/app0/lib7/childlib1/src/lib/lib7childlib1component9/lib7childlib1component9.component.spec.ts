import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib1component9Component } from './lib7childlib1component9.component';

describe('Lib7childlib1component9Component', () => {
  let component: Lib7childlib1component9Component;
  let fixture: ComponentFixture<Lib7childlib1component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib1component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib1component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
