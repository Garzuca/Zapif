import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositoresWizard } from './expositores-wizard';

describe('ExpositoresWizard', () => {
  let component: ExpositoresWizard;
  let fixture: ComponentFixture<ExpositoresWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpositoresWizard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpositoresWizard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
