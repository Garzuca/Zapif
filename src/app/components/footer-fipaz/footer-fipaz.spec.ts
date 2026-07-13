import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFipaz } from './footer-fipaz';

describe('FooterFipaz', () => {
  let component: FooterFipaz;
  let fixture: ComponentFixture<FooterFipaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFipaz],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterFipaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
