import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib7component8Component } from './lib2childlib7component8.component';

describe('Lib2childlib7component8Component', () => {
  let component: Lib2childlib7component8Component;
  let fixture: ComponentFixture<Lib2childlib7component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2childlib7component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
