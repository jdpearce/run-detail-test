import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib8component2Component } from './lib7childlib8component2.component';

describe('Lib7childlib8component2Component', () => {
  let component: Lib7childlib8component2Component;
  let fixture: ComponentFixture<Lib7childlib8component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib8component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib8component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
