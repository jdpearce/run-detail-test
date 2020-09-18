import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib4component2Component } from './lib9childlib4component2.component';

describe('Lib9childlib4component2Component', () => {
  let component: Lib9childlib4component2Component;
  let fixture: ComponentFixture<Lib9childlib4component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib4component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib4component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
