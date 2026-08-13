import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-youtube.html',
  styleUrl: './video-youtube.css',
})
export class VideoYoutube {
  private sanitizer = inject(DomSanitizer);

  // Video promocional FIPAZ (Id o URL)
  readonly youtubeId = signal<string>('NHzpzNGAwjc');
  readonly isClosed = signal<boolean>(false);

  // Extrae el ID de 11 caracteres incluso si se ingresa una URL completa de YouTube
  private extractYoutubeId(urlOrId: string): string {
    if (!urlOrId) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = urlOrId.match(regExp);
    return (match && match[2].length === 11) ? match[2] : urlOrId;
  }

  // URL sanitizada para iframe flotante con controles nativos de YouTube
  readonly safeEmbedUrl = computed<SafeResourceUrl | null>(() => {
    const rawId = this.youtubeId();
    if (!rawId) return null;
    const videoId = this.extractYoutubeId(rawId);
    const rawUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&controls=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  });

  closeWidget(): void {
    this.isClosed.set(true);
  }
}
