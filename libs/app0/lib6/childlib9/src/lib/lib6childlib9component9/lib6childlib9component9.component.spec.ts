import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib9component9Component } from './lib6childlib9component9.component';

describe('Lib6childlib9component9Component', () => {
  let component: Lib6childlib9component9Component;
  let fixture: ComponentFixture<Lib6childlib9component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib9component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib9component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
