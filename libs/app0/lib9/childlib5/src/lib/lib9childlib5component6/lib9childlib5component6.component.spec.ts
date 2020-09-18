import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib5component6Component } from './lib9childlib5component6.component';

describe('Lib9childlib5component6Component', () => {
  let component: Lib9childlib5component6Component;
  let fixture: ComponentFixture<Lib9childlib5component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib5component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib5component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
