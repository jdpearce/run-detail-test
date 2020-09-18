import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib3component7Component } from './lib6childlib3component7.component';

describe('Lib6childlib3component7Component', () => {
  let component: Lib6childlib3component7Component;
  let fixture: ComponentFixture<Lib6childlib3component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib3component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib3component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
