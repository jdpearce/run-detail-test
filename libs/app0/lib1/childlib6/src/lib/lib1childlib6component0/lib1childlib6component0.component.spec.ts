import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component0Component } from './lib1childlib6component0.component';

describe('Lib1childlib6component0Component', () => {
  let component: Lib1childlib6component0Component;
  let fixture: ComponentFixture<Lib1childlib6component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1childlib6component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
