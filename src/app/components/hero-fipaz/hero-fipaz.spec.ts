import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFipaz } from './hero-fipaz';

describe('HeroFipaz', () => {
  let component: HeroFipaz;
  let fixture: ComponentFixture<HeroFipaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFipaz],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroFipaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
