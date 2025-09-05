import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDemo } from './tree-demo';

describe('TreeDemo', () => {
  let component: TreeDemo;
  let fixture: ComponentFixture<TreeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
