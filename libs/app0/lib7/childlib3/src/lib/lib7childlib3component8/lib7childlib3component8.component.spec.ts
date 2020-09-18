import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib3component8Component } from './lib7childlib3component8.component';

describe('Lib7childlib3component8Component', () => {
  let component: Lib7childlib3component8Component;
  let fixture: ComponentFixture<Lib7childlib3component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib3component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib3component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
