import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipForm } from './membership-form';

describe('MembershipForm', () => {
  let component: MembershipForm;
  let fixture: ComponentFixture<MembershipForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
