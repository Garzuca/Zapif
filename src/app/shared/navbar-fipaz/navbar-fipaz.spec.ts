import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFipaz } from './navbar-fipaz';

describe('NavbarFipaz', () => {
  let component: NavbarFipaz;
  let fixture: ComponentFixture<NavbarFipaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarFipaz],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarFipaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
