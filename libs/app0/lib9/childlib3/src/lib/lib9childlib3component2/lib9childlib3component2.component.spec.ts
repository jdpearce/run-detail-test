import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib3component2Component } from './lib9childlib3component2.component';

describe('Lib9childlib3component2Component', () => {
  let component: Lib9childlib3component2Component;
  let fixture: ComponentFixture<Lib9childlib3component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib3component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
