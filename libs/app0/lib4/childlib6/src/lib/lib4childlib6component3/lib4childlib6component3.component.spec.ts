import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component3Component } from './lib4childlib6component3.component';

describe('Lib4childlib6component3Component', () => {
  let component: Lib4childlib6component3Component;
  let fixture: ComponentFixture<Lib4childlib6component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4childlib6component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
