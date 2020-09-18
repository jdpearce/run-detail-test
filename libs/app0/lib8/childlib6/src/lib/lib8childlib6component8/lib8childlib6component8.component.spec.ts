import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib6component8Component } from './lib8childlib6component8.component';

describe('Lib8childlib6component8Component', () => {
  let component: Lib8childlib6component8Component;
  let fixture: ComponentFixture<Lib8childlib6component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib6component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib6component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
