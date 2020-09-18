import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib1component8Component } from './lib9childlib1component8.component';

describe('Lib9childlib1component8Component', () => {
  let component: Lib9childlib1component8Component;
  let fixture: ComponentFixture<Lib9childlib1component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib1component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib1component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
