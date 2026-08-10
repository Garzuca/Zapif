import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALERIA_HITOS, HitoHistorico } from './galeria.data';

export interface DecadaFiltro {
  label: string;      // Ej: 'Década 2020s'
  decada: number;     // Ej: 2020
}

@Component({
  selector: 'app-galeria-historica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-historica.html',
  styleUrls: ['./galeria-historica.css']
})
export class GaleriaHistoricaComponent {
  // 'TODOS' o el número inicial de la década (ej: 2020, 2010, 2000)
  filtroDecadaActivo = signal<number | 'TODOS' | 'ULTIMOS'>('ULTIMOS');
  imagenSeleccionada = signal<HitoHistorico | null>(null);

  readonly hitos = GALERIA_HITOS;

  // Extrae y calcula dinámicamente las décadas disponibles en los datos
  decadasDisponibles = computed<DecadaFiltro[]>(() => {
    const decadasSet = new Set<number>();

    this.hitos.forEach(hito => {
      const decadaInicio = Math.floor(hito.anio / 10) * 10;
      decadasSet.add(decadaInicio);
    });

    // Ordenar décadas de mayor a menor (ej: 2020, 2010, 2000)
    return Array.from(decadasSet)
      .sort((a, b) => b - a)
      .map(decada => ({
        label: `${decada}s`,
        decada
      }));
  });

  // Filtra la grilla según la década seleccionada
  hitosFiltrados = computed(() => {
    const filtro = this.filtroDecadaActivo();
    if (filtro === 'ULTIMOS') return this.hitos.filter(hito => hito.anio >= 2020);
    if (filtro === 'TODOS') return this.hitos;

    return this.hitos.filter(hito => {
      const decadaHito = Math.floor(hito.anio / 10) * 10;
      return decadaHito === filtro;
    });
  });

  cambiarFiltroDecada(decada: number | 'TODOS' | 'ULTIMOS'): void {
    this.filtroDecadaActivo.set(decada);
  }

  abrirLightbox(hito: HitoHistorico): void {
    this.imagenSeleccionada.set(hito);
  }

  cerrarLightbox(): void {
    this.imagenSeleccionada.set(null);
  }
}