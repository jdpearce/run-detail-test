import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component8Component } from './lib3childlib6component8.component';

describe('Lib3childlib6component8Component', () => {
  let component: Lib3childlib6component8Component;
  let fixture: ComponentFixture<Lib3childlib6component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3childlib6component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});