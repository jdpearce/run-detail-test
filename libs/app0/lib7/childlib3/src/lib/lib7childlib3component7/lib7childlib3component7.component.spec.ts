import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib3component7Component } from './lib7childlib3component7.component';

describe('Lib7childlib3component7Component', () => {
  let component: Lib7childlib3component7Component;
  let fixture: ComponentFixture<Lib7childlib3component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib3component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib3component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
