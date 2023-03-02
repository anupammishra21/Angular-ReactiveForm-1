import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childpr2Component } from './childpr2.component';

describe('Childpr2Component', () => {
  let component: Childpr2Component;
  let fixture: ComponentFixture<Childpr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childpr2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childpr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
