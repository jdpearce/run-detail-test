import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component7Component } from './lib2childlib8component7.component';

describe('Lib2childlib8component7Component', () => {
  let component: Lib2childlib8component7Component;
  let fixture: ComponentFixture<Lib2childlib8component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2childlib8component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
