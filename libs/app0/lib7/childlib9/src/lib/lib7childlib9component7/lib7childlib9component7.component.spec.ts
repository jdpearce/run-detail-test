import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib9component7Component } from './lib7childlib9component7.component';

describe('Lib7childlib9component7Component', () => {
  let component: Lib7childlib9component7Component;
  let fixture: ComponentFixture<Lib7childlib9component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib9component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib9component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
