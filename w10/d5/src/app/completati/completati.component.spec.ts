import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletatiComponent } from './completati.component';

describe('CompletatiComponent', () => {
  let component: CompletatiComponent;
  let fixture: ComponentFixture<CompletatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
