import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib6component1Component } from './lib8childlib6component1.component';

describe('Lib8childlib6component1Component', () => {
  let component: Lib8childlib6component1Component;
  let fixture: ComponentFixture<Lib8childlib6component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib6component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
