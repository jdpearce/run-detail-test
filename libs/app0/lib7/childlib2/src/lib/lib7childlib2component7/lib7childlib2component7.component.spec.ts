import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib2component7Component } from './lib7childlib2component7.component';

describe('Lib7childlib2component7Component', () => {
  let component: Lib7childlib2component7Component;
  let fixture: ComponentFixture<Lib7childlib2component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib2component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib2component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
