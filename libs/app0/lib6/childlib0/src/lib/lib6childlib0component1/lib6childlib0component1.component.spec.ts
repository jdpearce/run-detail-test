import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib0component1Component } from './lib6childlib0component1.component';

describe('Lib6childlib0component1Component', () => {
  let component: Lib6childlib0component1Component;
  let fixture: ComponentFixture<Lib6childlib0component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib0component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
