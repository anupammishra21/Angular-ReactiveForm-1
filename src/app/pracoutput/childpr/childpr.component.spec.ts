import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildprComponent } from './childpr.component';

describe('ChildprComponent', () => {
  let component: ChildprComponent;
  let fixture: ComponentFixture<ChildprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
