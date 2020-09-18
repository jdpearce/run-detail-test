import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib7component8Component } from './lib7childlib7component8.component';

describe('Lib7childlib7component8Component', () => {
  let component: Lib7childlib7component8Component;
  let fixture: ComponentFixture<Lib7childlib7component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib7component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib7component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
