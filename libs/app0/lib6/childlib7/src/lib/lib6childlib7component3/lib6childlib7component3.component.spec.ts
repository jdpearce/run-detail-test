import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib7component3Component } from './lib6childlib7component3.component';

describe('Lib6childlib7component3Component', () => {
  let component: Lib6childlib7component3Component;
  let fixture: ComponentFixture<Lib6childlib7component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib7component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib7component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
