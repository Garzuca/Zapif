import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorBloques } from './selector-bloques';

describe('SelectorBloques', () => {
  let component: SelectorBloques;
  let fixture: ComponentFixture<SelectorBloques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorBloques],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorBloques);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
