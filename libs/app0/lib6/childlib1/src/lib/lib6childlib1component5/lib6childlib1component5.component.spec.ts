import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib1component5Component } from './lib6childlib1component5.component';

describe('Lib6childlib1component5Component', () => {
  let component: Lib6childlib1component5Component;
  let fixture: ComponentFixture<Lib6childlib1component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib1component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib1component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
