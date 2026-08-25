import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contador-fipaz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador-fipaz.html',
  styleUrls: ['./contador-fipaz.css']
})
export class ContadorFipazComponent implements OnInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);

  // 🌟 CORRECCIÓN: Instancia exacta y segura para Octubre (mes 9) de 2026
  private fechaDestino: number = new Date(2026, 9, 28, 15, 0, 0).getTime();
  private timerId: any;

  dias = signal<string>('00');
  horas = signal<string>('00');
  minutos = signal<string>('00');
  segundos = signal<string>('00');
  feriaIniciada = signal<boolean>(false);

  ngOnInit(): void {
    // Ejecutamos una vez al arrancar para evitar el parpadeo de "00" al cargar la página
    this.calcularTiempo();

    // El motor que actualiza de forma automática cada segundo (solo en el navegador para evitar colgar el servidor SSR)
    if (isPlatformBrowser(this.platformId)) {
      this.timerId = setInterval(() => {
        this.calcularTiempo();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private calcularTiempo(): void {
    const ahora = new Date().getTime();
    // Restamos directamente los números de tiempo Unix
    const diferencia = this.fechaDestino - ahora;

    if (diferencia <= 0) {
      this.feriaIniciada.set(true);
      this.dias.set('00');
      this.horas.set('00');
      this.minutos.set('00');
      this.segundos.set('00');
      if (this.timerId) clearInterval(this.timerId);
      return;
    }

    // Unidades de tiempo expresadas en milisegundos
    const msPorDia = 1000 * 60 * 60 * 24;
    const msPorHora = 1000 * 60 * 60;
    const msPorMinuto = 1000 * 60;

    // Extracción de los valores enteros restantes
    const diasCalculados = Math.floor(diferencia / msPorDia);
    const horasCalculadas = Math.floor((diferencia % msPorDia) / msPorHora);
    const minutosCalculados = Math.floor((diferencia % msPorHora) / msPorMinuto);
    const segundosCalculados = Math.floor((diferencia % msPorMinuto) / 1000);

    // Formateo dinámico con strings usando padStart para asegurar los 2 dígitos siempre
    this.dias.set(String(diasCalculados).padStart(2, '0'));
    this.horas.set(String(horasCalculadas).padStart(2, '0'));
    this.minutos.set(String(minutosCalculados).padStart(2, '0'));
    this.segundos.set(String(segundosCalculados).padStart(2, '0'));
  }

  // ============================================================
  // INTEGRACIÓN CON CALENDARIOS (GOOGLE CALENDAR E IOS/ICS)
  // ============================================================

  agregarAGoogleCalendar(): void {
    const titulo = encodeURIComponent('FIPAZ 2026 - 25 Años de historia');
    const detalles = encodeURIComponent('Feria Internacional de La Paz - El encuentro empresarial más grande del occidente boliviano.');
    const ubicacion = encodeURIComponent('Campo Ferial Chuquiago Marka, La Paz, Bolivia');
    // Fecha Inicio: 28 de Octubre 2026, 15:00 UTC (20261028T190000Z en UTC)
    // Fecha Fin: 08 de Noviembre 2026, 23:00 UTC
    const inicioUTC = '20261028T190000Z';
    const finUTC = '20261108T230000Z';

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${inicioUTC}/${finUTC}&details=${detalles}&location=${ubicacion}`;
    window.open(googleCalendarUrl, '_blank');
  }

  descargarICS(): void {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//FIPAZ//Feria Internacional de La Paz 2026//ES',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:FIPAZ 2026 - 25 Años de historia',
      'DESCRIPTION:Feria Internacional de La Paz - El encuentro empresarial más grande del occidente boliviano.',
      'LOCATION:Campo Ferial Chuquiago Marka\\, La Paz\\, Bolivia',
      'DTSTART:20261028T190000Z',
      'DTEND:20261108T230000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'fipaz-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
