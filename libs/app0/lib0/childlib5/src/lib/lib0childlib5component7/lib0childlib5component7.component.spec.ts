import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component7Component } from './lib0childlib5component7.component';

describe('Lib0childlib5component7Component', () => {
  let component: Lib0childlib5component7Component;
  let fixture: ComponentFixture<Lib0childlib5component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib0childlib5component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
