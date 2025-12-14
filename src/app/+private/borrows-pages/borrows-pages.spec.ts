import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowsPages } from './borrows-pages';

describe('BorrowsPages', () => {
  let component: BorrowsPages;
  let fixture: ComponentFixture<BorrowsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowsPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowsPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
