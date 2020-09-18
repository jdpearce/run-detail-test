import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib0component3Component } from './lib9childlib0component3.component';

describe('Lib9childlib0component3Component', () => {
  let component: Lib9childlib0component3Component;
  let fixture: ComponentFixture<Lib9childlib0component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib0component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib0component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
