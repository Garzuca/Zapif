import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFipazComponent } from './navbar-fipaz';

describe('NavbarFipaz', () => {
  let component: NavbarFipazComponent;
  let fixture: ComponentFixture<NavbarFipazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarFipazComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarFipazComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
