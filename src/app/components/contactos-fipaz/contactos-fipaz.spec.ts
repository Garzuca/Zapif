import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosFipaz } from './contactos-fipaz';

describe('ContactosFipaz', () => {
  let component: ContactosFipaz;
  let fixture: ComponentFixture<ContactosFipaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactosFipaz],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactosFipaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
