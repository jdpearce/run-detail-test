import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib4component4Component } from './lib9childlib4component4.component';

describe('Lib9childlib4component4Component', () => {
  let component: Lib9childlib4component4Component;
  let fixture: ComponentFixture<Lib9childlib4component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib4component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib4component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
