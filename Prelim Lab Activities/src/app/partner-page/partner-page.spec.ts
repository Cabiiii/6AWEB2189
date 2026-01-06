import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPage } from './partner-page';

describe('PartnerPage', () => {
  let component: PartnerPage;
  let fixture: ComponentFixture<PartnerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
