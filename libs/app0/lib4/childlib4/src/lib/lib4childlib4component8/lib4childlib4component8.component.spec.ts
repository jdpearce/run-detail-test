import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component8Component } from './lib4childlib4component8.component';

describe('Lib4childlib4component8Component', () => {
  let component: Lib4childlib4component8Component;
  let fixture: ComponentFixture<Lib4childlib4component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4childlib4component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
