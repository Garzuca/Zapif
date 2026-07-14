import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsFipaz } from './blogs.fipaz';

describe('BlogsFipaz', () => {
  let component: BlogsFipaz;
  let fixture: ComponentFixture<BlogsFipaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsFipaz],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsFipaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
