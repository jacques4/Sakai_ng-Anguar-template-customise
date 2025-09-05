import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsDemo } from './panels-demo';

describe('PanelsDemo', () => {
  let component: PanelsDemo;
  let fixture: ComponentFixture<PanelsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
