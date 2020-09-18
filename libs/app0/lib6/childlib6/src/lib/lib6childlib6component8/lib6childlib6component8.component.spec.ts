import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib6component8Component } from './lib6childlib6component8.component';

describe('Lib6childlib6component8Component', () => {
  let component: Lib6childlib6component8Component;
  let fixture: ComponentFixture<Lib6childlib6component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib6component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib6component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
