import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPages } from './books-pages';

describe('BooksPages', () => {
  let component: BooksPages;
  let fixture: ComponentFixture<BooksPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
