import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib5component3Component } from './lib6childlib5component3.component';

describe('Lib6childlib5component3Component', () => {
  let component: Lib6childlib5component3Component;
  let fixture: ComponentFixture<Lib6childlib5component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib5component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib5component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
