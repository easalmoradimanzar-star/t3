import { ComponentFixture, TestBed } from '@angular/core/testing';

import { membersPage } from './members-pages';

describe('MembersPages', () => {
  let component: membersPage;
  let fixture: ComponentFixture<membersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [membersPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(membersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
