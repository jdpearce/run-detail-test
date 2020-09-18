import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib6component6Component } from './lib8childlib6component6.component';

describe('Lib8childlib6component6Component', () => {
  let component: Lib8childlib6component6Component;
  let fixture: ComponentFixture<Lib8childlib6component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib6component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib6component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
