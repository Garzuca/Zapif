import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTiktok } from './seccion-tiktok';

describe('SeccionTiktok', () => {
  let component: SeccionTiktok;
  let fixture: ComponentFixture<SeccionTiktok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionTiktok],
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionTiktok);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
