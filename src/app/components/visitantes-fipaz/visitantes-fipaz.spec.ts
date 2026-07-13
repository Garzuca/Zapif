import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantesFipaz } from './visitantes-fipaz';

describe('VisitantesFipaz', () => {
  let component: VisitantesFipaz;
  let fixture: ComponentFixture<VisitantesFipaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitantesFipaz],
    }).compileComponents();

    fixture = TestBed.createComponent(VisitantesFipaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
