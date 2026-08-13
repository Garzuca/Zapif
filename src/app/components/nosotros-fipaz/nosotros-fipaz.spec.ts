import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosFipaz } from './nosotros-fipaz';

describe('NosotrosFipaz', () => {
  let component: NosotrosFipaz;
  let fixture: ComponentFixture<NosotrosFipaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosFipaz],
    }).compileComponents();

    fixture = TestBed.createComponent(NosotrosFipaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
