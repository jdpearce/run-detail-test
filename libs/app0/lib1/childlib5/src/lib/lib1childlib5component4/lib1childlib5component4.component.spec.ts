import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component4Component } from './lib1childlib5component4.component';

describe('Lib1childlib5component4Component', () => {
  let component: Lib1childlib5component4Component;
  let fixture: ComponentFixture<Lib1childlib5component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1childlib5component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
