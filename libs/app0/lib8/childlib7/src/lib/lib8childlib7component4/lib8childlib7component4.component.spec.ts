import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib7component4Component } from './lib8childlib7component4.component';

describe('Lib8childlib7component4Component', () => {
  let component: Lib8childlib7component4Component;
  let fixture: ComponentFixture<Lib8childlib7component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib7component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib7component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
