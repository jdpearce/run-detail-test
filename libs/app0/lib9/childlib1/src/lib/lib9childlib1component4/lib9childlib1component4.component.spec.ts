import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib1component4Component } from './lib9childlib1component4.component';

describe('Lib9childlib1component4Component', () => {
  let component: Lib9childlib1component4Component;
  let fixture: ComponentFixture<Lib9childlib1component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib1component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
