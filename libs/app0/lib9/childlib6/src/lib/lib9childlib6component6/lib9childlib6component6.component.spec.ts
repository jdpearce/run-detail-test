import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib6component6Component } from './lib9childlib6component6.component';

describe('Lib9childlib6component6Component', () => {
  let component: Lib9childlib6component6Component;
  let fixture: ComponentFixture<Lib9childlib6component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib6component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib6component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
