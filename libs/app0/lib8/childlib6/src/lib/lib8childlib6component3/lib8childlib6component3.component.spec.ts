import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib6component3Component } from './lib8childlib6component3.component';

describe('Lib8childlib6component3Component', () => {
  let component: Lib8childlib6component3Component;
  let fixture: ComponentFixture<Lib8childlib6component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib6component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib6component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
