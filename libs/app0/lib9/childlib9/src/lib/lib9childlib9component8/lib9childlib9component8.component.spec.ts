import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib9component8Component } from './lib9childlib9component8.component';

describe('Lib9childlib9component8Component', () => {
  let component: Lib9childlib9component8Component;
  let fixture: ComponentFixture<Lib9childlib9component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib9component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib9component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
