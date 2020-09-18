import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib7component5Component } from './lib9childlib7component5.component';

describe('Lib9childlib7component5Component', () => {
  let component: Lib9childlib7component5Component;
  let fixture: ComponentFixture<Lib9childlib7component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib7component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib7component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
