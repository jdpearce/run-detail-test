import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component8Component } from './lib1childlib8component8.component';

describe('Lib1childlib8component8Component', () => {
  let component: Lib1childlib8component8Component;
  let fixture: ComponentFixture<Lib1childlib8component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1childlib8component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
