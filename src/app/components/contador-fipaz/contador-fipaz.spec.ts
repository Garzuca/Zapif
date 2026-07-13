import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorFipaz } from './contador-fipaz';

describe('ContadorFipaz', () => {
  let component: ContadorFipaz;
  let fixture: ComponentFixture<ContadorFipaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorFipaz],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorFipaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
