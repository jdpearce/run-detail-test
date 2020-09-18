import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib5component3Component } from './lib9childlib5component3.component';

describe('Lib9childlib5component3Component', () => {
  let component: Lib9childlib5component3Component;
  let fixture: ComponentFixture<Lib9childlib5component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib5component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib5component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
