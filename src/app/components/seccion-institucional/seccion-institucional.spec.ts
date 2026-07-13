import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInstitucional } from './seccion-institucional';

describe('SeccionInstitucional', () => {
  let component: SeccionInstitucional;
  let fixture: ComponentFixture<SeccionInstitucional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionInstitucional],
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionInstitucional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
