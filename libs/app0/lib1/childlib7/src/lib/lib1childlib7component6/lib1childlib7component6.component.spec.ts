import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component6Component } from './lib1childlib7component6.component';

describe('Lib1childlib7component6Component', () => {
  let component: Lib1childlib7component6Component;
  let fixture: ComponentFixture<Lib1childlib7component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1childlib7component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
