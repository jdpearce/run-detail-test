import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib5component5Component } from './lib9childlib5component5.component';

describe('Lib9childlib5component5Component', () => {
  let component: Lib9childlib5component5Component;
  let fixture: ComponentFixture<Lib9childlib5component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib5component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib5component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
