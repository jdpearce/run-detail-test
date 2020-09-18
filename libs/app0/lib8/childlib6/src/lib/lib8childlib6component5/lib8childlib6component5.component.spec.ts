import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib6component5Component } from './lib8childlib6component5.component';

describe('Lib8childlib6component5Component', () => {
  let component: Lib8childlib6component5Component;
  let fixture: ComponentFixture<Lib8childlib6component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib6component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib6component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
