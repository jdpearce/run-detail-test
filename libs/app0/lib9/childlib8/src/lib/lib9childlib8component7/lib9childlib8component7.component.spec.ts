import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib8component7Component } from './lib9childlib8component7.component';

describe('Lib9childlib8component7Component', () => {
  let component: Lib9childlib8component7Component;
  let fixture: ComponentFixture<Lib9childlib8component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib8component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib8component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
