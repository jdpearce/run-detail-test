import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib7component7Component } from './lib8childlib7component7.component';

describe('Lib8childlib7component7Component', () => {
  let component: Lib8childlib7component7Component;
  let fixture: ComponentFixture<Lib8childlib7component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib7component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib7component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
