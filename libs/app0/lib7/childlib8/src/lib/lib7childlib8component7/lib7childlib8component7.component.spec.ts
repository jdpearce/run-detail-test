import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib8component7Component } from './lib7childlib8component7.component';

describe('Lib7childlib8component7Component', () => {
  let component: Lib7childlib8component7Component;
  let fixture: ComponentFixture<Lib7childlib8component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib8component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib8component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
