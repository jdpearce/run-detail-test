import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component6Component } from './lib4childlib5component6.component';

describe('Lib4childlib5component6Component', () => {
  let component: Lib4childlib5component6Component;
  let fixture: ComponentFixture<Lib4childlib5component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4childlib5component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
