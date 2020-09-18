import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib2component7Component } from './lib8childlib2component7.component';

describe('Lib8childlib2component7Component', () => {
  let component: Lib8childlib2component7Component;
  let fixture: ComponentFixture<Lib8childlib2component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib2component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib2component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
