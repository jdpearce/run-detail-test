import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib0component9Component } from './lib9childlib0component9.component';

describe('Lib9childlib0component9Component', () => {
  let component: Lib9childlib0component9Component;
  let fixture: ComponentFixture<Lib9childlib0component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib0component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib0component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
