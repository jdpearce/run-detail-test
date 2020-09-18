import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib3component2Component } from './lib6childlib3component2.component';

describe('Lib6childlib3component2Component', () => {
  let component: Lib6childlib3component2Component;
  let fixture: ComponentFixture<Lib6childlib3component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib3component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
