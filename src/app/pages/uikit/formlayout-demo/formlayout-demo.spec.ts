import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlayoutDemo } from './formlayout-demo';

describe('FormlayoutDemo', () => {
  let component: FormlayoutDemo;
  let fixture: ComponentFixture<FormlayoutDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlayoutDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlayoutDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
