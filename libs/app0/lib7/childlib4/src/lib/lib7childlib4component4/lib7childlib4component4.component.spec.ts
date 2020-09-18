import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib4component4Component } from './lib7childlib4component4.component';

describe('Lib7childlib4component4Component', () => {
  let component: Lib7childlib4component4Component;
  let fixture: ComponentFixture<Lib7childlib4component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib4component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib4component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
