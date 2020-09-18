import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib5component7Component } from './lib8childlib5component7.component';

describe('Lib8childlib5component7Component', () => {
  let component: Lib8childlib5component7Component;
  let fixture: ComponentFixture<Lib8childlib5component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib5component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib5component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
