import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentpr2Component } from './parentpr2.component';

describe('Parentpr2Component', () => {
  let component: Parentpr2Component;
  let fixture: ComponentFixture<Parentpr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parentpr2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentpr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
