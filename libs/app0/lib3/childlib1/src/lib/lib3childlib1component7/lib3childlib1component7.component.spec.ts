import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component7Component } from './lib3childlib1component7.component';

describe('Lib3childlib1component7Component', () => {
  let component: Lib3childlib1component7Component;
  let fixture: ComponentFixture<Lib3childlib1component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3childlib1component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
