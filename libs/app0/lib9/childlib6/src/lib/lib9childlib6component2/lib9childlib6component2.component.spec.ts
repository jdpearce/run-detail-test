import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib6component2Component } from './lib9childlib6component2.component';

describe('Lib9childlib6component2Component', () => {
  let component: Lib9childlib6component2Component;
  let fixture: ComponentFixture<Lib9childlib6component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib6component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib6component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
