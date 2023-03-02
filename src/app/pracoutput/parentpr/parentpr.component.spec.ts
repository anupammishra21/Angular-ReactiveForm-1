import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentprComponent } from './parentpr.component';

describe('ParentprComponent', () => {
  let component: ParentprComponent;
  let fixture: ComponentFixture<ParentprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
