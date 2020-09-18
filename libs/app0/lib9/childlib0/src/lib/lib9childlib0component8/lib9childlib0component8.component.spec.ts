import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib0component8Component } from './lib9childlib0component8.component';

describe('Lib9childlib0component8Component', () => {
  let component: Lib9childlib0component8Component;
  let fixture: ComponentFixture<Lib9childlib0component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib0component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib0component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
