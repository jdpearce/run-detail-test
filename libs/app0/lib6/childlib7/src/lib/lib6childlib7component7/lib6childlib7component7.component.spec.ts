import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib7component7Component } from './lib6childlib7component7.component';

describe('Lib6childlib7component7Component', () => {
  let component: Lib6childlib7component7Component;
  let fixture: ComponentFixture<Lib6childlib7component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib7component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib7component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
