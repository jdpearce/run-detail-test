import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib1component5Component } from './lib8childlib1component5.component';

describe('Lib8childlib1component5Component', () => {
  let component: Lib8childlib1component5Component;
  let fixture: ComponentFixture<Lib8childlib1component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib1component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib1component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
