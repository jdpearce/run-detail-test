import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib8component7Component } from './lib8childlib8component7.component';

describe('Lib8childlib8component7Component', () => {
  let component: Lib8childlib8component7Component;
  let fixture: ComponentFixture<Lib8childlib8component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib8component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib8component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
