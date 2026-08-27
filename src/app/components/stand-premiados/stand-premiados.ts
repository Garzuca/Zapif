import { Component, Input, OnInit, computed, signal, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandPremioService, StandPremiado } from '../../services/stand-premio';

@Component({
  selector: 'app-stand-premiados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-premiados.html',
  styleUrl: './stand-premiados.css',
})
export class StandPremiados implements OnInit {
  private readonly standPremioService = inject(StandPremioService);
  private readonly cdr = inject(ChangeDetectorRef);

  private readonly standsSignal = signal<StandPremiado[]>([]);
  readonly stands = this.standsSignal.asReadonly();
  readonly cargando = signal(false);

  // Duplicamos el listado para lograr la animación de cinta en bucle 100% continuo sin pausas
  readonly standsDuplicados = computed(() => {
    const list = this.stands();
    if (list.length === 0) return [];
    // Triplicamos la lista si hay pocos elementos para asegurar un carrusel fluído e infinito
    return [...list, ...list, ...list];
  });

  @Input({ alias: 'stands' })
  set standsInput(value: StandPremiado[] | null | undefined) {
    if (value && value.length > 0) {
      this.standsSignal.set(value);
      this.cdr.markForCheck();
    }
  }

  ngOnInit(): void {
    if (this.stands().length === 0) {
      this.cargarStandsPremiados();
    }
  }

  cargarStandsPremiados(anio?: string): void {
    this.cargando.set(true);
    this.standPremioService.getStandsPremiadosByAnio(anio).subscribe({
      next: (data) => {
        this.standsSignal.set(data || []);
        this.cargando.set(false);
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al obtener stands premiados:', err);
        this.cargando.set(false);
        this.cdr.markForCheck();
      }
    });
  }
}
