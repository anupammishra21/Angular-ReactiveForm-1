import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentnewComponent } from './parentnew.component';

describe('ParentnewComponent', () => {
  let component: ParentnewComponent;
  let fixture: ComponentFixture<ParentnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
