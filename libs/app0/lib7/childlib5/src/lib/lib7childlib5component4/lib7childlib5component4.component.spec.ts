import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib5component4Component } from './lib7childlib5component4.component';

describe('Lib7childlib5component4Component', () => {
  let component: Lib7childlib5component4Component;
  let fixture: ComponentFixture<Lib7childlib5component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib5component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib5component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
