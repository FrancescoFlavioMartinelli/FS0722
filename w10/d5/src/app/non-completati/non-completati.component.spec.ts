import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCompletatiComponent } from './non-completati.component';

describe('NonCompletatiComponent', () => {
  let component: NonCompletatiComponent;
  let fixture: ComponentFixture<NonCompletatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonCompletatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonCompletatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
