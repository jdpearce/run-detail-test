import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib9component2Component } from './lib8childlib9component2.component';

describe('Lib8childlib9component2Component', () => {
  let component: Lib8childlib9component2Component;
  let fixture: ComponentFixture<Lib8childlib9component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib9component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib9component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
