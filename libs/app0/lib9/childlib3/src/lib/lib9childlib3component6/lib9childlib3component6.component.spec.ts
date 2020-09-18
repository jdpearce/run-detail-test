import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib3component6Component } from './lib9childlib3component6.component';

describe('Lib9childlib3component6Component', () => {
  let component: Lib9childlib3component6Component;
  let fixture: ComponentFixture<Lib9childlib3component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib3component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
