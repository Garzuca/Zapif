import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositoresWizardComponent } from './expositores-wizard';

describe('ExpositoresWizard', () => {
  let component: ExpositoresWizardComponent;
  let fixture: ComponentFixture<ExpositoresWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpositoresWizardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpositoresWizardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
