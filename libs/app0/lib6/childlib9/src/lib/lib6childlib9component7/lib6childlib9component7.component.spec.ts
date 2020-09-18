import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib9component7Component } from './lib6childlib9component7.component';

describe('Lib6childlib9component7Component', () => {
  let component: Lib6childlib9component7Component;
  let fixture: ComponentFixture<Lib6childlib9component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib9component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib9component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
