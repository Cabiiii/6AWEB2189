import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsPage } from './join-us-page';

describe('JoinUsPage', () => {
  let component: JoinUsPage;
  let fixture: ComponentFixture<JoinUsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinUsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinUsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
