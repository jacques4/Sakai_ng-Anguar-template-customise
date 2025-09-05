import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDemo } from './file-demo';

describe('FileDemo', () => {
  let component: FileDemo;
  let fixture: ComponentFixture<FileDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
