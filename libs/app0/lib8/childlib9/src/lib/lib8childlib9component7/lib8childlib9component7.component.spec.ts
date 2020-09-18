import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib9component7Component } from './lib8childlib9component7.component';

describe('Lib8childlib9component7Component', () => {
  let component: Lib8childlib9component7Component;
  let fixture: ComponentFixture<Lib8childlib9component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib9component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib9component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
