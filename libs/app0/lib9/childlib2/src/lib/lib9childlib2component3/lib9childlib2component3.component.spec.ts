import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib2component3Component } from './lib9childlib2component3.component';

describe('Lib9childlib2component3Component', () => {
  let component: Lib9childlib2component3Component;
  let fixture: ComponentFixture<Lib9childlib2component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib2component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib2component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
