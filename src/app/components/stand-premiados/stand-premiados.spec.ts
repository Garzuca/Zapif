import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandPremiados } from './stand-premiados';

describe('StandPremiados', () => {
  let component: StandPremiados;
  let fixture: ComponentFixture<StandPremiados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandPremiados],
    }).compileComponents();

    fixture = TestBed.createComponent(StandPremiados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
