import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib6component4Component } from './lib9childlib6component4.component';

describe('Lib9childlib6component4Component', () => {
  let component: Lib9childlib6component4Component;
  let fixture: ComponentFixture<Lib9childlib6component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib6component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib6component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
