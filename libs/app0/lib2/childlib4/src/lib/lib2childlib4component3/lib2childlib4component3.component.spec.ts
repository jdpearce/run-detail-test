import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component3Component } from './lib2childlib4component3.component';

describe('Lib2childlib4component3Component', () => {
  let component: Lib2childlib4component3Component;
  let fixture: ComponentFixture<Lib2childlib4component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2childlib4component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
