import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDemo } from './messages-demo';

describe('MessagesDemo', () => {
  let component: MessagesDemo;
  let fixture: ComponentFixture<MessagesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
