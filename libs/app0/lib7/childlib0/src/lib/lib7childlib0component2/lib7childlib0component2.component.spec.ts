import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib0component2Component } from './lib7childlib0component2.component';

describe('Lib7childlib0component2Component', () => {
  let component: Lib7childlib0component2Component;
  let fixture: ComponentFixture<Lib7childlib0component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib0component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib0component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
