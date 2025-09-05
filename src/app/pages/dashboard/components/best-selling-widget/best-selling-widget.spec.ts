import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingWidget } from './best-selling-widget';

describe('BestSellingWidget', () => {
  let component: BestSellingWidget;
  let fixture: ComponentFixture<BestSellingWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellingWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
