import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib1component8Component } from './lib7childlib1component8.component';

describe('Lib7childlib1component8Component', () => {
  let component: Lib7childlib1component8Component;
  let fixture: ComponentFixture<Lib7childlib1component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib1component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib1component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
