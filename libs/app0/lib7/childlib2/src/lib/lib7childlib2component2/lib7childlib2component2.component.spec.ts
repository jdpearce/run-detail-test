import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib2component2Component } from './lib7childlib2component2.component';

describe('Lib7childlib2component2Component', () => {
  let component: Lib7childlib2component2Component;
  let fixture: ComponentFixture<Lib7childlib2component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib2component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib2component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
