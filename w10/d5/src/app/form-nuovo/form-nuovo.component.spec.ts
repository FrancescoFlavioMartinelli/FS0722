import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuovoComponent } from './form-nuovo.component';

describe('FormNuovoComponent', () => {
  let component: FormNuovoComponent;
  let fixture: ComponentFixture<FormNuovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
