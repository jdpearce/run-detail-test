import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib5component4Component } from './lib8childlib5component4.component';

describe('Lib8childlib5component4Component', () => {
  let component: Lib8childlib5component4Component;
  let fixture: ComponentFixture<Lib8childlib5component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib5component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib5component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
