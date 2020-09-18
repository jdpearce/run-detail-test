import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib7component8Component } from './lib8childlib7component8.component';

describe('Lib8childlib7component8Component', () => {
  let component: Lib8childlib7component8Component;
  let fixture: ComponentFixture<Lib8childlib7component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib7component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib7component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
