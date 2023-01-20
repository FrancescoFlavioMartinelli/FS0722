import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocandinaComponent } from './locandina.component';

describe('LocandinaComponent', () => {
  let component: LocandinaComponent;
  let fixture: ComponentFixture<LocandinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocandinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocandinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
