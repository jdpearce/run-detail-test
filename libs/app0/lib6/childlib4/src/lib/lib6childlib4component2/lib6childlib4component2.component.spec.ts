import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib4component2Component } from './lib6childlib4component2.component';

describe('Lib6childlib4component2Component', () => {
  let component: Lib6childlib4component2Component;
  let fixture: ComponentFixture<Lib6childlib4component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib4component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib4component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
