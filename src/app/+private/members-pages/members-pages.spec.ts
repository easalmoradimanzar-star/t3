import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersPages } from './members-pages';

describe('MembersPages', () => {
  let component: MembersPages;
  let fixture: ComponentFixture<MembersPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
