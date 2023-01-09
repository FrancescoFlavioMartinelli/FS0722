import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoComponent } from './terzo.component';

describe('TerzoComponent', () => {
  let component: TerzoComponent;
  let fixture: ComponentFixture<TerzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerzoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
