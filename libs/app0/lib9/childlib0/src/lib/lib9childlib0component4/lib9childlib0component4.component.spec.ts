import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib0component4Component } from './lib9childlib0component4.component';

describe('Lib9childlib0component4Component', () => {
  let component: Lib9childlib0component4Component;
  let fixture: ComponentFixture<Lib9childlib0component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib0component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib0component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
