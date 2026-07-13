import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador-fipaz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador-fipaz.html',
  styleUrls: ['./contador-fipaz.css']
})
export class ContadorFipazComponent implements OnInit, OnDestroy {

  // 🌟 CORRECCIÓN: Instancia exacta y segura para Octubre (mes 9) de 2026
  private fechaDestino: number = new Date(2026, 9, 7, 18, 0, 0).getTime();
  private timerId: any;

  dias: string = '00';
  horas: string = '00';
  minutos: string = '00';
  segundos: string = '00';
  feriaIniciada: boolean = false;

  ngOnInit(): void {
    // Ejecutamos una vez al arrancar para evitar el parpadeo de "00" al cargar la página
    this.calcularTiempo();

    // El motor que actualiza de forma automática cada segundo
    this.timerId = setInterval(() => {
      this.calcularTiempo();
    }, 1000);
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
      this.feriaIniciada = true;
      this.dias = '00'; this.horas = '00'; this.minutos = '00'; this.segundos = '00';
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
    this.dias = String(diasCalculados).padStart(2, '0');
    this.horas = String(horasCalculadas).padStart(2, '0');
    this.minutos = String(minutosCalculados).padStart(2, '0');
    this.segundos = String(segundosCalculados).padStart(2, '0');
  }
}
