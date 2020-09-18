import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib2component4Component } from './lib7childlib2component4.component';

describe('Lib7childlib2component4Component', () => {
  let component: Lib7childlib2component4Component;
  let fixture: ComponentFixture<Lib7childlib2component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib2component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib2component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
