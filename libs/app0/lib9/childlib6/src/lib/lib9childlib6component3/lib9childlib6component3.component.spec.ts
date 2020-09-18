import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib6component3Component } from './lib9childlib6component3.component';

describe('Lib9childlib6component3Component', () => {
  let component: Lib9childlib6component3Component;
  let fixture: ComponentFixture<Lib9childlib6component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib6component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib6component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
