import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib4component3Component } from './lib8childlib4component3.component';

describe('Lib8childlib4component3Component', () => {
  let component: Lib8childlib4component3Component;
  let fixture: ComponentFixture<Lib8childlib4component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib4component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib4component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
