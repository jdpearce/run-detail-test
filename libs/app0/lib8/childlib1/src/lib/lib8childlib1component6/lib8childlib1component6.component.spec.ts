import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib1component6Component } from './lib8childlib1component6.component';

describe('Lib8childlib1component6Component', () => {
  let component: Lib8childlib1component6Component;
  let fixture: ComponentFixture<Lib8childlib1component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib1component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib1component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
