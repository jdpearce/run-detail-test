import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib9component7Component } from './lib9childlib9component7.component';

describe('Lib9childlib9component7Component', () => {
  let component: Lib9childlib9component7Component;
  let fixture: ComponentFixture<Lib9childlib9component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib9component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib9component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
