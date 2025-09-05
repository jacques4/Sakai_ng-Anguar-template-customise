import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDemo } from './media-demo';

describe('MediaDemo', () => {
  let component: MediaDemo;
  let fixture: ComponentFixture<MediaDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
