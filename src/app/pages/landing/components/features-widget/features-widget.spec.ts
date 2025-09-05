import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesWidget } from './features-widget';

describe('FeaturesWidget', () => {
  let component: FeaturesWidget;
  let fixture: ComponentFixture<FeaturesWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
