import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroEventos } from './tablero-eventos';

describe('TableroEventos', () => {
  let component: TableroEventos;
  let fixture: ComponentFixture<TableroEventos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableroEventos],
    }).compileComponents();

    fixture = TestBed.createComponent(TableroEventos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
