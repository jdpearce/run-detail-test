import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component9Component } from './lib1childlib3component9.component';

describe('Lib1childlib3component9Component', () => {
  let component: Lib1childlib3component9Component;
  let fixture: ComponentFixture<Lib1childlib3component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1childlib3component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
