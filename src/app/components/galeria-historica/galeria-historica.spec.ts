import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaHistorica } from './galeria-historica';

describe('GaleriaHistorica', () => {
  let component: GaleriaHistorica;
  let fixture: ComponentFixture<GaleriaHistorica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaHistorica],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaHistorica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
