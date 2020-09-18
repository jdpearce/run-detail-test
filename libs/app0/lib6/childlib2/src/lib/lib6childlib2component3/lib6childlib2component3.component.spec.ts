import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib2component3Component } from './lib6childlib2component3.component';

describe('Lib6childlib2component3Component', () => {
  let component: Lib6childlib2component3Component;
  let fixture: ComponentFixture<Lib6childlib2component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib2component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib2component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
