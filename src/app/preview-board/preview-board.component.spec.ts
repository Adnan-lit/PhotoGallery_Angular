import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewBoardComponent } from './preview-board.component';

describe('PreviewBoardComponent', () => {
  let component: PreviewBoardComponent;
  let fixture: ComponentFixture<PreviewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
