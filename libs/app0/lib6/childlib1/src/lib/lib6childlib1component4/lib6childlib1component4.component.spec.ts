import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib1component4Component } from './lib6childlib1component4.component';

describe('Lib6childlib1component4Component', () => {
  let component: Lib6childlib1component4Component;
  let fixture: ComponentFixture<Lib6childlib1component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6childlib1component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
