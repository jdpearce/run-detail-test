import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib5component5Component } from './lib8childlib5component5.component';

describe('Lib8childlib5component5Component', () => {
  let component: Lib8childlib5component5Component;
  let fixture: ComponentFixture<Lib8childlib5component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib5component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib5component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
