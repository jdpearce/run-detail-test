import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib6component9Component } from './lib7childlib6component9.component';

describe('Lib7childlib6component9Component', () => {
  let component: Lib7childlib6component9Component;
  let fixture: ComponentFixture<Lib7childlib6component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib6component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib6component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
