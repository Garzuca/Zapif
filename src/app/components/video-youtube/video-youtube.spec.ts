import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoYoutube } from './video-youtube';

describe('VideoYoutube', () => {
  let component: VideoYoutube;
  let fixture: ComponentFixture<VideoYoutube>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoYoutube],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoYoutube);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
