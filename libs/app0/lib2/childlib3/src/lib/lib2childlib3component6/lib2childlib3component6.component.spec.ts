import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component6Component } from './lib2childlib3component6.component';

describe('Lib2childlib3component6Component', () => {
  let component: Lib2childlib3component6Component;
  let fixture: ComponentFixture<Lib2childlib3component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2childlib3component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
