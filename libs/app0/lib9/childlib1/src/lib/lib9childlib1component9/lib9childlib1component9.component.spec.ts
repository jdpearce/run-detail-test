import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib1component9Component } from './lib9childlib1component9.component';

describe('Lib9childlib1component9Component', () => {
  let component: Lib9childlib1component9Component;
  let fixture: ComponentFixture<Lib9childlib1component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib1component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib1component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
