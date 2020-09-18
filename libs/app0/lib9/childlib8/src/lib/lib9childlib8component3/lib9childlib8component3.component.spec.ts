import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib8component3Component } from './lib9childlib8component3.component';

describe('Lib9childlib8component3Component', () => {
  let component: Lib9childlib8component3Component;
  let fixture: ComponentFixture<Lib9childlib8component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib8component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib8component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
