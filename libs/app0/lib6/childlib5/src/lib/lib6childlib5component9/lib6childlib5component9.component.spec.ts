import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib5component9Component } from './lib6childlib5component9.component';

describe('Lib6childlib5component9Component', () => {
  let component: Lib6childlib5component9Component;
  let fixture: ComponentFixture<Lib6childlib5component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib5component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib5component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
