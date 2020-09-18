import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib4component5Component } from './lib6childlib4component5.component';

describe('Lib6childlib4component5Component', () => {
  let component: Lib6childlib4component5Component;
  let fixture: ComponentFixture<Lib6childlib4component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib4component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib4component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
