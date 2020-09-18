import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib3component6Component } from './lib8childlib3component6.component';

describe('Lib8childlib3component6Component', () => {
  let component: Lib8childlib3component6Component;
  let fixture: ComponentFixture<Lib8childlib3component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib3component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
