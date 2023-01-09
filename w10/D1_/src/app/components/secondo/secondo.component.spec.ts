import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoComponent } from './secondo.component';

describe('SecondoComponent', () => {
  let component: SecondoComponent;
  let fixture: ComponentFixture<SecondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
