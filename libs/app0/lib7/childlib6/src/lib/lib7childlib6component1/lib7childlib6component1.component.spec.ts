import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib6component1Component } from './lib7childlib6component1.component';

describe('Lib7childlib6component1Component', () => {
  let component: Lib7childlib6component1Component;
  let fixture: ComponentFixture<Lib7childlib6component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib6component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
