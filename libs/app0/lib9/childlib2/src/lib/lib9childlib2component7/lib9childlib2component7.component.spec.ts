import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib2component7Component } from './lib9childlib2component7.component';

describe('Lib9childlib2component7Component', () => {
  let component: Lib9childlib2component7Component;
  let fixture: ComponentFixture<Lib9childlib2component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib2component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib2component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
