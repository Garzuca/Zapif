import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TikTokService, VideoTikTok } from '../../services/tiktok';

@Component({
  selector: 'app-seccion-tiktok',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-tiktok.html',
  styleUrls: ['./seccion-tiktok.css']
})
export class SeccionTikTokComponent implements OnInit {
  private tikTokService = inject(TikTokService);

  videos = signal<VideoTikTok[]>([]);
  cargando = signal<boolean>(true);

  ngOnInit(): void {
    this.obtenerVideos();
  }

  obtenerVideos(): void {
    this.tikTokService.obtenerPublicos().subscribe({
      next: (data) => {
        this.videos.set(data);
        this.cargando.set(false);
        // Le damos un pequeño tiempo al DOM para renderizar las etiquetas <blockquote cite="...">
        setTimeout(() => this.cargarScriptTikTok(), 150);
      },
      error: (err) => {
        console.error('Error al cargar videos de TikTok para la web pública', err);
        this.cargando.set(false);
      }
    });
  }

  // Descarga e inicializa el script de TikTok de forma asíncrona
  private cargarScriptTikTok(): void {
    const scriptId = 'tiktok-embed-script';
    const scriptExistente = document.getElementById(scriptId);

    if (!scriptExistente) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Si el script ya estaba cargado en el navegador, fuerza el re-escaneo del DOM
      if ((window as any).tiktokEmbed) {
        (window as any).tiktokEmbed.load();
      }
    }
  }
}