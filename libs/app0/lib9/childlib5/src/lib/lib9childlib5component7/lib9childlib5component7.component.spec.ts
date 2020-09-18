import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib5component7Component } from './lib9childlib5component7.component';

describe('Lib9childlib5component7Component', () => {
  let component: Lib9childlib5component7Component;
  let fixture: ComponentFixture<Lib9childlib5component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib5component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib5component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
