import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component3Component } from './lib3childlib9component3.component';

describe('Lib3childlib9component3Component', () => {
  let component: Lib3childlib9component3Component;
  let fixture: ComponentFixture<Lib3childlib9component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3childlib9component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
