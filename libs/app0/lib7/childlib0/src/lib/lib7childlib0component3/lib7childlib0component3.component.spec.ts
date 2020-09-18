import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib0component3Component } from './lib7childlib0component3.component';

describe('Lib7childlib0component3Component', () => {
  let component: Lib7childlib0component3Component;
  let fixture: ComponentFixture<Lib7childlib0component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib0component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib0component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
