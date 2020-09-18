import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib3component6Component } from './lib6childlib3component6.component';

describe('Lib6childlib3component6Component', () => {
  let component: Lib6childlib3component6Component;
  let fixture: ComponentFixture<Lib6childlib3component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib3component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
