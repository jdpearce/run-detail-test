import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component9Component } from './lib3childlib0component9.component';

describe('Lib3childlib0component9Component', () => {
  let component: Lib3childlib0component9Component;
  let fixture: ComponentFixture<Lib3childlib0component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3childlib0component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
