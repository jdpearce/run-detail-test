import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib9component1Component } from './lib9childlib9component1.component';

describe('Lib9childlib9component1Component', () => {
  let component: Lib9childlib9component1Component;
  let fixture: ComponentFixture<Lib9childlib9component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib9component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
