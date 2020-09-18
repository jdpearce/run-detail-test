import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib7component6Component } from './lib7childlib7component6.component';

describe('Lib7childlib7component6Component', () => {
  let component: Lib7childlib7component6Component;
  let fixture: ComponentFixture<Lib7childlib7component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib7component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib7component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
