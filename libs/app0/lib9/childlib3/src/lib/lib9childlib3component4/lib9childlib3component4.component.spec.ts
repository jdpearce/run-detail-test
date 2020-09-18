import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib3component4Component } from './lib9childlib3component4.component';

describe('Lib9childlib3component4Component', () => {
  let component: Lib9childlib3component4Component;
  let fixture: ComponentFixture<Lib9childlib3component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9childlib3component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib3component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
