import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsWidget } from './notifications-widget';

describe('NotificationsWidget', () => {
  let component: NotificationsWidget;
  let fixture: ComponentFixture<NotificationsWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
