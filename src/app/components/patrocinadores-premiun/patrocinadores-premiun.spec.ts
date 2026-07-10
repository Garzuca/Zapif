import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadoresPremiun } from './patrocinadores-premiun';

describe('PatrocinadoresPremiun', () => {
  let component: PatrocinadoresPremiun;
  let fixture: ComponentFixture<PatrocinadoresPremiun>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrocinadoresPremiun],
    }).compileComponents();

    fixture = TestBed.createComponent(PatrocinadoresPremiun);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
