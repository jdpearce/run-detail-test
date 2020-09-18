import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib7component5Component } from './lib8childlib7component5.component';

describe('Lib8childlib7component5Component', () => {
  let component: Lib8childlib7component5Component;
  let fixture: ComponentFixture<Lib8childlib7component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib7component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib7component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
