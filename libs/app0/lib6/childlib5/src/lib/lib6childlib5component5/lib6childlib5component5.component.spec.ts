import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib5component5Component } from './lib6childlib5component5.component';

describe('Lib6childlib5component5Component', () => {
  let component: Lib6childlib5component5Component;
  let fixture: ComponentFixture<Lib6childlib5component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib5component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib5component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
