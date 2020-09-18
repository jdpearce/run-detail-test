import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib8component3Component } from './lib7childlib8component3.component';

describe('Lib7childlib8component3Component', () => {
  let component: Lib7childlib8component3Component;
  let fixture: ComponentFixture<Lib7childlib8component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib8component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib8component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
