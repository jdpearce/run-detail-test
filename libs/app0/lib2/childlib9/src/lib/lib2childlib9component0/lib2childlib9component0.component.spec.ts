import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component0Component } from './lib2childlib9component0.component';

describe('Lib2childlib9component0Component', () => {
  let component: Lib2childlib9component0Component;
  let fixture: ComponentFixture<Lib2childlib9component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2childlib9component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
