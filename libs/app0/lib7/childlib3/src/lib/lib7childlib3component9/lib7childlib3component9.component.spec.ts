import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib3component9Component } from './lib7childlib3component9.component';

describe('Lib7childlib3component9Component', () => {
  let component: Lib7childlib3component9Component;
  let fixture: ComponentFixture<Lib7childlib3component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib3component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib3component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
