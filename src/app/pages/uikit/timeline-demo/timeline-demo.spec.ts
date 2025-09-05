import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDemo } from './timeline-demo';

describe('TimelineDemo', () => {
  let component: TimelineDemo;
  let fixture: ComponentFixture<TimelineDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
