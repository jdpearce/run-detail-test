import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib4component1Component } from './lib7childlib4component1.component';

describe('Lib7childlib4component1Component', () => {
  let component: Lib7childlib4component1Component;
  let fixture: ComponentFixture<Lib7childlib4component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib4component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
