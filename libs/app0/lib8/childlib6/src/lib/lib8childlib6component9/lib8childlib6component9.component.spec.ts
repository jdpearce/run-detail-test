import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib6component9Component } from './lib8childlib6component9.component';

describe('Lib8childlib6component9Component', () => {
  let component: Lib8childlib6component9Component;
  let fixture: ComponentFixture<Lib8childlib6component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib6component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib6component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
