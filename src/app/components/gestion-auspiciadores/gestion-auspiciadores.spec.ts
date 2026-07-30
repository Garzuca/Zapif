import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAuspiciadores } from './gestion-auspiciadores';

describe('GestionAuspiciadores', () => {
  let component: GestionAuspiciadores;
  let fixture: ComponentFixture<GestionAuspiciadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAuspiciadores],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAuspiciadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
