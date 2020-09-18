import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib2component5Component } from './lib7childlib2component5.component';

describe('Lib7childlib2component5Component', () => {
  let component: Lib7childlib2component5Component;
  let fixture: ComponentFixture<Lib7childlib2component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib2component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib2component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
