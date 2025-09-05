import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscDemo } from './misc-demo';

describe('MiscDemo', () => {
  let component: MiscDemo;
  let fixture: ComponentFixture<MiscDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
