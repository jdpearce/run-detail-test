import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib4component9Component } from './lib8childlib4component9.component';

describe('Lib8childlib4component9Component', () => {
  let component: Lib8childlib4component9Component;
  let fixture: ComponentFixture<Lib8childlib4component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib4component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib4component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
