import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib3component6Component } from './lib7childlib3component6.component';

describe('Lib7childlib3component6Component', () => {
  let component: Lib7childlib3component6Component;
  let fixture: ComponentFixture<Lib7childlib3component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib3component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
