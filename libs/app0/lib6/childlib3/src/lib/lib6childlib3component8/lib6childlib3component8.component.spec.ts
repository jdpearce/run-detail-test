import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib3component8Component } from './lib6childlib3component8.component';

describe('Lib6childlib3component8Component', () => {
  let component: Lib6childlib3component8Component;
  let fixture: ComponentFixture<Lib6childlib3component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib3component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib3component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
